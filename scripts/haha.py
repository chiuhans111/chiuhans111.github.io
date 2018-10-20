from fractions import Fraction

n = int(input())

data = []


def rank(line):
    r = 0
    while r < len(line) and line[r] == 0:
        r += 1
    return r


for i in range(n):
    data.append(list(map(Fraction, input().split())))


for i in range(0, n):


    data.sort(key=rank)

    the_target_divider = data[i][i]

    data[i] = [d/the_target_divider for d in data[i]]

    if i >= len(data[i]):
        continue

    for j in range(0, n):

        if i == j:
            continue

        the_target_subtract = data[j][i]

        for k in range(len(data[j])):
            data[j][k] -= the_target_subtract*data[i][k]


for i in range(0, n):
    print(*[str(d) for d in data[i]])