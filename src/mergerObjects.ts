import _ from 'lodash'
import { UnionToIntersection } from 'utility-types'

export default function mergeObjects<SRCS extends object[]>(...sources: SRCS): UnionToIntersection<SRCS[number]> {
  const mergedObject = {}
  return _.merge(mergedObject, ...sources)
}
