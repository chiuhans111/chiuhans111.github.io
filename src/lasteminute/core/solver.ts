import { isElement } from "./dom";

export class MatchPath<T1, T2> {
    constructor(
        public prev: MatchPath<T1, T2> | undefined,
        public cost: number,
        public match1: T1 | undefined,
        public match2: T2 | undefined
    ) {
        if (prev !== undefined) this.cost += prev.cost;
    }
}

/**
 * Cost Functions for elements
 */
export function NodeCreationCost(node: Node): number {
    return node.childNodes.length + 2;
}

export function NodeDeletionCost(node: Node): number {
    return node.childNodes.length + 2;
}

/**
 * Estimates the cost to morph nodeA into nodeB.
 */
export function NodeEditCostEstimate(nodeA: Node | undefined, nodeB: Node | undefined): number {
    if (nodeA === undefined || nodeB === undefined) {
        if (nodeB !== undefined) return NodeCreationCost(nodeB);
        if (nodeA !== undefined) return NodeDeletionCost(nodeA);
        return 0;
    }

    if (isElement(nodeA) && isElement(nodeB)) {
        if (nodeA.id !== "" && nodeA.id === nodeB.id) {
            return 0;
        }
        if (nodeA.textContent.length > 5)
            return Math.abs(nodeA.textContent.length - nodeB.textContent.length) * 0.01;
    }

    if (nodeA.nodeType === nodeB.nodeType) {
        return Math.abs(nodeA.childNodes.length - nodeB.childNodes.length) + 1.0;
    }

    return nodeA.childNodes.length + nodeB.childNodes.length + 2;
}

/**
 * Finds the lowest cost edit path between two lists using Levenshtein DP.
 */
export function FindLowestCostPath<T1, T2>(
    listA: T1[],
    listB: T2[],
    costEstimate: (a: T1 | undefined, b: T2 | undefined) => number
): [T1 | undefined, T2 | undefined][] {
    if (listA.length === 0) {
        return listB.map(b => [undefined, b] as [T1 | undefined, T2 | undefined]);
    }
    if (listB.length === 0) {
        return listA.map(a => [a, undefined] as [T1 | undefined, T2 | undefined]);
    }

    // Fast path: if lengths match and 1-to-1 cost is zero or types match exactly
    if (listA.length === listB.length) {
        let isDirectMatch = true;
        for (let k = 0; k < listA.length; k++) {
            if (costEstimate(listA[k], listB[k]) > 0.5) {
                isDirectMatch = false;
                break;
            }
        }
        if (isDirectMatch) {
            return listA.map((a, k) => [a, listB[k]] as [T1 | undefined, T2 | undefined]);
        }
    }

    const dp: (MatchPath<T1, T2> | undefined)[] = new Array(listB.length + 1).fill(undefined);

    for (let i = 0; i <= listA.length; i++) {
        let prev = dp[0];
        for (let j = 0; j <= listB.length; j++) {
            const current = dp[j];
            const candidates: [MatchPath<T1, T2> | undefined, T1 | undefined, T2 | undefined][] = [];

            if (i !== 0) {
                candidates.push([dp[j], listA[i - 1], undefined]);
            }
            if (j !== 0) {
                candidates.push([dp[j - 1], undefined, listB[j - 1]]);
            }
            if (i !== 0 && j !== 0) {
                candidates.push([prev, listA[i - 1], listB[j - 1]]);
            }

            let best: MatchPath<T1, T2> | undefined;
            for (const [p, a, b] of candidates) {
                const np = new MatchPath(p, costEstimate(a, b), a, b);
                if (best === undefined || np.cost < best.cost) {
                    best = np;
                }
            }

            if (best !== undefined) {
                dp[j] = best;
            } else if (i === 0 && j === 0) {
                // Initialize start point
                dp[0] = new MatchPath<T1, T2>(undefined, 0, undefined, undefined);
            }

            prev = current;
        }
    }

    const result: [T1 | undefined, T2 | undefined][] = [];
    let currentPath = dp[listB.length];

    // The very first node is usually the [undefined, undefined] start node, skip it
    while (currentPath !== undefined && currentPath.prev !== undefined) {
        result.unshift([currentPath.match1, currentPath.match2]);
        currentPath = currentPath.prev;
    }

    return result;
}
