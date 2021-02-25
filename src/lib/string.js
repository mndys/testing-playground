export function commaSeparatedToArray(stringList) {
  const commaSeparatedArray = stringList
    .split(',')
    .map(string => string.trim())
    .filter((string, index) => stringList.indexOf(string) === index)
    .sort()
  return commaSeparatedArray
}
