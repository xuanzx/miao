var xuanzx = function () {




  function chunk(array, size = 1) {
    if (size >= array.length) {
      return [array.slice()]
    }
    let res = []
    let len = array.length
    for (let i = 0; i < len; i += size) {
      let temp = []
      let end = (i + size) <= len ? i + size : len
      for (let j = i; j < end; j++) {
        temp.push(array[j])
      }
      res.push(temp)
    }
    return res
  }


  function compact(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  }


  function difference(ary, ...values) {
    var result = []
    var valuesAry = flattenDeep(values)
    for (let i = 0; i < ary.length; i++) {
      if (!valuesAry.includes(ary[i])) {
        result.push(ary[i])
      }
    }
    return result
  }



  function differenceBy(array, size = 1) {

  }
  function differenceWith(array, size = 1) {

  }

  function drop(array, n = 1) {
    return array.slice(n)
  }


  function dropRight(array, n = 1) {
    if (n >= array.length) {
      return []
    } else if (n <= 0) {
      return array.slice()
    }
    return array.slice(0, array.length - n)
  }




  function dropRightWhile(array, size = 1) {

  }
  function dropWhile(array, size = 1) {

  }


  function fill(ary, value, start = 0, end = ary.length) {
    for (let i = start; i < end; i++) {
      ary[i] = value
    }
    return ary
  }


  function findIndex(array, size = 1) {

  }
  function indLastIndex(array, size = 1) {

  }
  function findLastIndex(array, size = 1) {

  }



  function flatten(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (Array.isArray(item)) {
        for (let every of item) {
          res.push(every)
        }
      } else {
        res.push(item)
      }
    }
    return res
  }


  function flattenDeep(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (Array.isArray(array[i])) {
        item = flattenDeep(array[i])
        for (let j = 0; j < item.length; j++) {
          res.push(item[j])
        }
      } else {
        res.push(item)
      }
    }
    return res
  }



  function flattenDepth(array, depth = 1) {
    if (depth == 0) {
      return array.slice()
    }
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let item = flattenDepth(array[i], depth - 1)
        for (let j = 0; j < item.length; j++) {
          res.push(item[j])
        }
      } else {
        res.push(array[i])
      }
    }
    return res
  }


  function fromPairs(pairs) {
    var res = {}
    for (var item of pairs) {
      res[item[0]] = item[1]
    }
    return res
  }



  function head(array) {
    return array[0]
  }



  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }


  function initial(array) {
    let len = array.length - 1
    let result = []
    for (let i = 0; i < len; i++) {
      result.push(array[i])
    }
    return result
  }


  function intersection(array, size = 1) {

  }
  function intersectionBy(array, size = 1) {

  }
  function intersectionWith(array, size = 1) {

  }



  function join(array, separator = ',') {
    let str = ''
    for (let i = 0; i < array.length - 1; i++) {
      str += array[i].toString() + separator
    }
    str += array[array.length - 1]
    return str
  }



  function last(array) {
    return array[array.length - 1]
  }


  function lastIndexOf(array, val, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (val === array[i]) {
        return i
      }
    }
    return -1
  }


  function nth(ary, n = 0) {
    if (n < 0) {
      n = n + ary.length
    }
    return ary[n]
  }



  function pull(ary, ...values) {
    let set = new Set(values)
    let temp = []
    for (let i = 0; i < ary.length; i++) {
      if (!set.has(ary[i])) {
        temp.push(ary[i])
      }
    }
    ary = temp
    return ary
  }


  function pullAll(array) {

  }
  function pullAllBy(array) {

  }
  function pullAllWith(array) {

  }
  function remove(array) {

  }



  function reverse(array) {
    let left = 0
    let right = array.length - 1
    while (left < right) {
      let temp = array[left]
      array[left] = array[right]
      array[right] = temp
      left++
      right--
    }
    return array
  }




  function slice(array) {

  }
  function sortedIndex(array) {

  }
  function sortedIndexBy(array) {

  }
  function sortedIndexOf(array) {

  }
  function sortedLastIndex(array) {

  }
  function sortedLastIndexBy(array) {

  }
  function sortedLastIndexOf(array) {

  }
  function sortedUniq(array) {

  }
  function sortedUniqBy(array) {

  }


  function tail(array) {
    var res = []
    for (var i = 1; i < array.length; i++) {
      res.push(array[i])
    }
    return res
  }



  function take(ary, n = 1) {
    if ((!Array.isArray(ary) && typeof ary != 'string') || n == 0) {
      return []
    }
    if (typeof ary == 'string') {
      ary = ary.split('')
    }
    if (n > ary.length) {
      n = ary.length
    } else if (n < 0) {
      n = 0
    }
    return ary.slice(0, n)

  }

  function takeRight(array,) {

  }



  function takeRightWhile(array,) {

  }
  function takeWhile(array,) {

  }
  function union(array,) {

  }
  function unionBy(array,) {

  }
  function unionWith(array,) {

  }
  function uniqWith(array,) {

  }


  function uniq(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (!result.includes(array[i])) {
        result.push(array[i])
      }
    }
    return result
  }


  function uniqBy(array,) {

  }
  function unzip(array,) {

  }
  function unzipWith(array,) {

  }


  function without(array, ...values) {
    let res = []
    array.forEach(item => {
      if (!values.includes(item)) {
        res.push(item)
      }
    })
    return res
  }


  function xor(array,) {

  }
  function xorBy(array,) {

  }
  function xorWith(array,) {

  }
  function zipObject(array,) {

  }
  function zipObjectDeep(array,) {

  }
  function zipWith(array,) {

  }


  function zip(...args) {

  }



  function countBy(array,) {

  }


  function every(ary, n = 1) {
    for (var i = 0; i < ary.length; i++) {
      if (!n(ary[i])) {
        return false
      }
    }
    return true
  }



  function filter(array,) {

  }
  function find(array,) {

  }
  function findLast(array,) {

  }
  function flatMap(array,) {

  }
  function flatMapDeep(array,) {

  }
  function flatMapDepth(array,) {

  }


  function forEach(array,) {

  }


  function forEachRight(array,) {

  }
  function groupBy(array,) {

  }
  function includes(array,) {

  }
  function invokeMap(array,) {

  }
  function keyBy(array,) {

  }
  function map(array,) {

  }
  function orderBy(array,) {

  }
  function partition(array,) {

  }


  function reduce(array) {

  }

  function reduceRight(array,) {

  }
  function reject(array,) {

  }
  function sample(array,) {

  }
  function sampleSize(array,) {

  }
  function shuffle(array,) {

  }


  function size(collection) {
    if (collection && typeof collection == 'object') {
      if (Array.isArray(collection)) {
        return collection.length
      }
      return Object.keys(collection).length
    } else if (typeof collection == 'string') {
      return collection.length
    }
  }




  function some(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return true
      }
    }
    return false
  }


  function sortBy(array,) {

  }
  function defer(array,) {

  }
  function delay(array,) {

  }
  function castArray(array,) {

  }
  function conformsTo(array,) {

  }
  function eq(array,) {

  }
  function gt(array,) {

  }
  function gte(array,) {

  }
  function isArguments(array,) {

  }
  function isArray(array,) {

  }
  function isArrayBuffer(array,) {

  }

  function isArrayLike(array,) {

  }
  function isArrayLikeObject(array,) {

  }


  function isBoolean(val) {
    if (val === true || val === false) {
      return true
    } else {
      return false
    }
  }



  function isDate(array,) {

  }
  function isElement(array,) {

  }

  function isEmpty(array,) {

  }
  function isEqual(array,) {

  }
  function isEqualWith(array,) {

  }
  function isError(array,) {

  }
  function isFunction(array,) {

  }
  function isInteger(array,) {

  }
  function isLength(array,) {

  }
  function isMap(array,) {

  }
  function isMatch(array,) {

  }
  function isMatchWith(array,) {

  }
  function isNaN(array,) {

  }

  function isNil(array,) {

  }
  function isNative(array,) {

  }
  function isNull(array,) {

  }


  function isNumber(value) {
    if (Math.abs(value) == Infinity || value != value || isFinite(value)) {
      return true
    }
    return false
  }



  function isObject(array,) {

  }
  function isObjectLike(array) {

  }
  function isPlainObject(array) {

  }

  function isRegExp(array) {

  }
  function isSafeInteger(array) {

  }
  function isSet(array) {

  }
  function isString(array) {

  }
  function isSymbol(array) {

  }
  function isTypedArray(array) {

  }
  function isUndefined(array) {

  }
  function isWeakMap(array) {

  }
  function isWeakSet(array) {

  }
  function lt(array) {

  }
  function lte(array) {

  }


  function toArray(value) {
    let res = [],
      type = typeof value
    if (type === 'object') {
      for (let j in value) {
        res.push(value[j])
      }
    } else if (type === 'string') {
      for (let i = 0; i < value.length; i++) {
        res.push(value[i])
      }
    }
    return res
  }
  +


    function toFinite(array) {

    }

  function toInteger(array) {

  }
  function toLength(array) {

  }
  function toNumber(array) {

  }
  function assign(array) {

  }
  function toSafeInteger(array) {

  }
  function add(array) {

  }


  function add(reduce) {

  }


  function ceil(number, precision = 0) {
    if (number == 0) {
      return 0
    }
    precision = toInteger(precision)
    let num1 = number * Math.pow(10, precision) | 0
    var test = Math.pow(10, -precision)
    return num1 * test == number ? num * test : (num1 + 1) * test
  }

  function divide(array) {

  }
  function floor(array) {

  }


  function max(ary) {
    if (ary.length = 0) {
      return undefined
    } else {
      let result = ary.reduce((max, it) => {
        return Math.max()
      }, -Infinity)
    }
  }






  function maxBy(array) {

  }
  function mean(array) {

  }
  function meanBy(array) {

  }

  function min(array) {

  }
  function minBy(array) {

  }
  function multiply(array) {

  }
  function round(array) {

  }
  function subtract(array) {

  }



  function sumBy(array) {

  }


  function sum(array) {
    let res = 0
    for (let i = 0; i < array.length; i++) {
      res += array[i]
    }
    return res
  }


  function clamp(array) {

  }
  function inRange(array) {

  }
  function random(array) {

  }
  function assignIn(array) {

  }
  function at(array) {

  }
  function defaults(array) {

  }
  function defaultsDeep(array) {

  }
  function findKey(array) {

  }
  function findLastKey(array) {

  }
  function forIn(array) {

  }
  function forInRight(array) {

  }
  function forOwn(array) {

  }
  function forOwnRight(array) {

  }
  function functions(array) {

  }
  function functionsIn(array) {

  }
  function get(array) {

  }
  function has(array) {

  }
  function hasIn(array) {

  }
  function invert(array) {

  }
  function invertBy(array) {

  }
  function invoke(array) {

  }
  function keys(array) {

  }
  function keysIn(array) {

  }
  function mapKeys(array) {

  }
  function mapValues(array) {

  }
  function merge(array) {

  }

  function mergeWith(array) {

  }
  function omit(array) {

  }
  function omitBy(array) {

  }

  function pick(array) {

  }
  function pickBy(array) {

  }
  function result(array) {

  }
  function set(array) {

  }
  function setWith(array) {

  }
  function toPairs(array) {

  }
  function toPairsIn(array) {

  }
  function transform(array) {

  }
  function unset(array) {

  }
  function update(array) {

  }
  function updateWith(array) {

  }
  function values(array) {

  }
  function valuesIn(array) {

  }
  function camelCase(array) {

  }

  function capitalize(array) {

  }
  function deburr(array) {

  }
  function endsWith(array) {

  }
  function deburr(array) {

  }
  function escape(array) {

  }
  function escapeRegExp(array) {

  }
  function kebabCase(array) {

  }
  function lowerCase(array) {

  }
  function pad(array) {

  }
  function padEnd(array) {

  }
  function padStart(array) {

  }



  function repeat(str = '', n = 1) {
    if (n <= 0) {
      return ''
    }
    let res = ''
    while (n--) {
      res += str
    }
    return res
  }



  function replace(array) {

  }
  function snakeCase(array) {

  }
  function split(array) {

  }
  function startCase(array) {

  }
  function startsWith(array) {

  }
  function toLower(array) {

  }
  function toUpper(array) {

  }
  function trim(array) {

  }
  function trimEnd(array) {

  }
  function trimStart(array) {

  }
  function truncate(array) {

  }
  function unescape(array) {

  }
  function upperCase(array) {

  }
  function upperFirst(array) {

  }
  function words(array) {

  }
  function bindAll(array) {

  }
  function defaultTo(array) {

  }
  function range(array) {

  }
  function rangeRight(array) {

  }
  function mixin(array) {

  }
  function times(array) {

  }
  function toPath(array) {

  }
  function uniqueId(array) {

  }
  function cloneDeep(array) {

  }
  function uniqueId(array) {

  }
  function identity(array) {

  }


  function concat(ary, ...val) {
    let res = ary.slice()
    for (let i = 0; i < val.length; i++) {
      let item = val[i]
      if (Array.isArray(item)) {
        for (let j = 0; j < item.length; j++) {
          res.push(item[j])
        }
      } else {
        res.push(item)
      }
    }
    return res
  }


  function pullAt(array) {

  }
  function matches(array) {

  }
  function property(array) {

  }
  function ary(array) {

  }
  function unary(array) {

  }
  function negate(array) {

  }
  function once(array) {

  }
  function spread(array) {

  }
  function curry(array) {

  }
  function memoize(array) {

  }
  function flip(array) {

  }
  function conforms(array) {

  }
  function constant(array) {

  }
  function flow(array) {

  }
  function method(array) {

  }
  function methodOf(array) {

  }
  function nthArg(array) {

  }
  function propertyOf(array) {

  }
  function parseJson(array) {

  }
  function stringifyJson(array) {

  }






  return {
    chunk: chunk,
    compact: compact,
    difference: difference,
    differenceBy: differenceBy,
    differenceWith: differenceWith,
    drop: drop,
    dropRight: dropRight,
    dropRightWhile: dropRightWhile,
    dropWhile: dropWhile,
    fill: fill,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    indLastIndex: indLastIndex,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    intersection: intersection,
    intersectionBy: intersectionBy,
    intersectionWith: intersectionWith,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    nth: nth,
    pull: pull,
    pullAll: pullAll,
    pullAllBy: pullAllBy,
    pullAllWith: pullAllWith,
    remove: remove,
    reverse: reverse,
    slice: slice,
    sortedIndex: sortedIndex,
    sortedIndexBy: sortedIndexBy,
    sortedIndexOf: sortedIndexOf,
    sortedLastIndex: sortedLastIndex,
    sortedLastIndexBy: sortedLastIndexBy,
    sortedLastIndexOf: sortedLastIndexOf,
    sortedUniq: sortedUniq,
    sortedUniqBy: sortedUniqBy,
    tail: tail,
    take: take,
    takeRight: takeRight,
    takeRightWhile: takeRightWhile,
    takeWhile: takeWhile,
    union: union,
    unionBy: unionBy,
    unionWith: unionWith,
    uniq: uniq,
    uniqBy: uniqBy,
    uniqWith: uniqWith,
    unzip: unzip,
    unzipWith: unzipWith,
    without: without,
    xor: xor,
    xorBy: xorBy,
    xorWith: xorWith,
    zipObject: zipObject,
    zipObjectDeep: zipObjectDeep,
    zipWith: zipWith,
    zip: zip,
    countBy: countBy,
    every: every,
    filter: filter,
    find: find,
    findLast: findLast,
    flatMap: flatMap,
    flatMapDeep: flatMapDeep,
    flatMapDepth: flatMapDepth,
    forEach: forEach,
    forEachRight: forEachRight,
    groupBy: groupBy,
    includes: includes,
    invokeMap: invokeMap,
    keyBy: keyBy,
    map: map,
    orderBy: orderBy,
    partition: partition,
    reduce: reduce,
    reduceRight: reduceRight,
    reject: reject,
    sample: sample,
    sampleSize: sampleSize,
    shuffle: shuffle,
    size: size,
    some: some,
    sortBy: sortBy,
    defer: defer,
    delay: delay,
    castArray: castArray,
    conformsTo: conformsTo,
    eq: eq,
    gt: gt,
    gte: gte,
    isArguments: isArguments,
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isArrayLike: isArrayLike,
    isArrayLikeObject: isArrayLikeObject,
    isBoolean: isBoolean,
    isDate: isDate,
    isElement: isElement,
    isEmpty: isEmpty,
    isEqual: isEqual,
    isEqualWith: isEqualWith,
    isError: isError,
    isFinite: isFinite,
    isFunction: isFunction,
    isInteger: isInteger,
    isLength: isLength,
    isMap: isMap,
    isMatch: isMatch,
    isMatchWith: isMatchWith,
    isNaN: isNaN,
    isNative: isNative,
    isNil: isNil,
    isNull: isNull,
    isNumber: isNumber,
    isObject: isObject,
    isObjectLike: isObjectLike,
    isPlainObject: isPlainObject,
    isRegExp: isRegExp,
    isSafeInteger: isSafeInteger,
    isSet: isSet,
    isString: isString,
    isSymbol: isSymbol,
    isTypedArray: isTypedArray,
    isUndefined: isUndefined,
    isWeakMap: isWeakMap,
    isWeakSet: isWeakSet,
    lt: lt,
    lte: lte,
    toArray: toArray,
    toFinite: toFinite,
    toInteger: toInteger,
    toLength: toLength,
    toNumber: toNumber,
    assign: assign,
    toSafeInteger: toSafeInteger,
    add: add,
    ceil: ceil,
    divide: divide,
    floor: floor,
    max: max,
    maxBy: maxBy,
    mean: mean,
    meanBy: meanBy,
    min: meanBy,
    minBy: minBy,
    multiply: multiply,
    round: round,
    subtract: subtract,
    sumBy: sumBy,
    sum: sum,
    clamp: clamp,
    inRange: inRange,
    random: random,
    assignIn: assignIn,
    at: at,
    defaults: defaults,
    defaultsDeep: defaultsDeep,
    findKey: findKey,
    findLastKey: findLastKey,
    forIn: forIn,
    forInRight: forInRight,
    forOwn: forOwn,
    forOwnRight: forOwnRight,
    functions: functions,
    functionsIn: functionsIn,
    get: get,
    has: has,
    hasIn: hasIn,
    invert: invert,
    invertBy: invertBy,
    invoke: invoke,
    keys: keys,
    keysIn: keysIn,
    mapKeys: mapKeys,
    mapValues: mapValues,
    merge: merge,
    mergeWith: mergeWith,
    omit: omit,
    omitBy: omitBy,
    pick: pick,
    pickBy: pickBy,
    result: result,
    set: set,
    setWith: setWith,
    toPairs: toPairs,
    toPairsIn: toPairsIn,
    transform: transform,
    unset: unset,
    update: update,
    updateWith: updateWith,
    values: values,
    valuesIn: valuesIn,
    camelCase: camelCase,
    capitalize: capitalize,
    deburr: deburr,
    endsWith: endsWith,
    escape: escape,
    escapeRegExp: escapeRegExp,
    kebabCase: kebabCase,
    lowerCase: lowerCase,
    lowerFirst: lowerCase,
    pad: pad,
    padEnd: padEnd,
    padStart: padStart,
    parseInt: parseInt,
    repeat: repeat,
    replace: replace,
    snakeCase: snakeCase,
    split: split,
    startCase: startCase,
    startsWith: startsWith,
    toLower: toLower,
    toUpper: toUpper,
    trim: trim,
    trimEnd: trimEnd,
    trimStart: trimStart,
    truncate: truncate,
    unescape: unescape,
    upperCase: upperCase,
    upperFirst: upperFirst,
    words: words,
    bindAll: bindAll,
    defaultTo: defaultTo,
    range: range,
    rangeRight: rangeRight,
    mixin: mixin,
    times: times,
    toPath: toPath,
    uniqueId: uniqueId,
    cloneDeep: cloneDeep,
    identity: identity,
    concat: concat,
    pullAt: pullAt,
    matches: matches,
    property: property,
    ary: ary,
    unary: unary,
    negate: negate,
    once: once,
    spread: spread,
    curry: curry,
    memoize: memoize,
    flip: flip,
    conforms: conforms,
    constant: constant,
    flow: flow,
    method: method,
    methodOf: methodOf,
    nthArg: nthArg,
    propertyOf: propertyOf,
    parseJson: parseJson,
    stringifyJson: stringifyJson,
  }
}()
