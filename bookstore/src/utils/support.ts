export const compareIds = <TId = number | string>(id1: TId, id2: TId) => Object.is(
    String(id1),
    String(id2)
);
