import { UnionToIntersection } from 'utility-types';
export default function mergeObjects<SRCS extends object[]>(...sources: SRCS): UnionToIntersection<SRCS[number]>;
//# sourceMappingURL=mergeObjects.d.ts.map