const stringList = 'Jane, John, joe, John, John, jane, joe, Joe'

export function commaSeparatedToArray(stringList) {
  let commaSeparatedArray = stringList
    .split(',')
    .map(string =>
      [string.trim()]
        .map(word =>
          word.search(/\w{2,}/) > -1
            ? word[0].toUpperCase() + word.substr(1)
            : word
        )
        .join()
    )
    .sort()
    .reduce(
      (stringArray, string) =>
        stringArray.includes(string) ? stringArray : [...stringArray, string],
      []
    )
  return commaSeparatedArray
}

commaSeparatedToArray(stringList)
