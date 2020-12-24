export const upgrateArr = (arr: any) => {
  let allNames = arr.map((item: any) => item.name)
  let filteredNames = Array.from(new Set(allNames))
  let newArr = filteredNames.map((name: any) => { return { name } })

  newArr.map((item: any) => item.url = arr.filter((itm: any) => itm.name === item.name).map((itm: any) => itm.url))

  return newArr
};