
/**
 * Standard 2D math vector used across the kinetic engine.
 */
export interface Vector2 {
    x: number;
    y: number;
}

/**
 * Interface for any physical entity that preserves velocity across frames.
 * Mimics human physical properties (mass, damping, stiffness).
 */
export interface IAgent extends Vector2 {
    vel: Vector2;
    mass: number;
    damping: number;
    stiffness: number;
    isWorking: boolean;
}

/**
 * A central math kernel for the Antigravity engine.

 * Provides pure vector operations and low-level integration primitives.
 */
export const Physics = {
    // Spatial constants
    MAX_VELOCITY: 50, // Absolute speed cap in pixels/frame

    add(a: Vector2, b: Vector2): Vector2 { return { x: (a.x || 0) + (b.x || 0), y: (a.y || 0) + (b.y || 0) }; },
    sub(a: Vector2, b: Vector2): Vector2 { return { x: (a.x || 0) - (b.x || 0), y: (a.y || 0) - (b.y || 0) }; },
    mul(a: Vector2, scalar: number): Vector2 { return { x: (a.x || 0) * scalar, y: (a.y || 0) * scalar }; },
    div(a: Vector2, scalar: number): Vector2 {
        if (scalar === 0) return { x: 0, y: 0 };
        return { x: (a.x || 0) / scalar, y: (a.y || 0) / scalar };
    },

    mag(a: Vector2): number { return Math.sqrt(a.x * a.x + a.y * a.y); },
    dist(a: Vector2, b: Vector2): number {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    },

    normalize(a: Vector2): Vector2 {
        const m = this.mag(a);
        return m > 0 ? this.div(a, m) : { x: 0, y: 0 };
    },

    /**
     * High-precision movement kernel using Damped Harmonic Oscillation (Spring Physics).
     * This ensures organic, fluid movement that naturally eases into targets.
     */
    stepTowards(
        agent: IAgent,
        target: Vector2 | undefined,
        dt: number
    ): Vector2 {
        if (target !== undefined) {
            var delta = this.sub(target, agent);
            var mag = this.mag(delta);
            const factor = 10 / (mag + 1);
            agent.vel = this.add(agent.vel, this.mul(delta, factor));

            if (mag < 100) {
                const factor = 2 / (mag + 1);
                agent.vel = this.add(this.mul(this.sub(this.mul(delta, factor), agent.vel), 0.5), agent.vel);
                if (mag < 10) {
                    const factor = 1 / (this.mag(delta) + 10);
                    agent.vel = this.mul(delta, factor);

                    if (mag < 1) {
                        agent.vel = { x: 0, y: 0 };
                        agent.x = target.x;
                        agent.y = target.y;
                    } else if (mag < 2) {
                        delta.x = Math.min(2, Math.max(-2, delta.x));
                        delta.y = Math.min(2, Math.max(-2, delta.y));
                        agent.vel = delta;
                    }
                }
            } else {
                agent.vel.y -= Math.abs(agent.vel.x) * 0.02;
            }
        }
        agent.x += agent.vel.x;
        agent.y += agent.vel.y;
        agent.vel = this.mul(agent.vel, 0.82);
        return agent;
    },
};




