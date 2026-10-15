function drawFieldLine(x, y) {
    var next = [x, y];

    for (var t = 0; t < 5; t++) {
        mcord = next;
        var field = elects.field(mcord);
        //field = [field[1], -field[0]]

        field = v.norm(field, 10);
        next = v.add(mcord, field);
        line(...mcord, ...next);
    }

    var next = [x, y];

    for (var t = 0; t < 5; t++) {
        mcord = next;
        var field = elects.field(mcord);
        //field = [field[1], -field[0]]

        field = v.norm(field, 10);
        next = v.sub(mcord, field);
        line(...mcord, ...next);
    }
}