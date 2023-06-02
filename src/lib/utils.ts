export const createRootDirectory = () => {
  const directory = {
    type: "folder",
    name: "Root",
    path: [0],
    children: [],
  };

  localStorage.setItem("file-folder-collection", JSON.stringify([directory]));
  return [directory];
};

export const getAllDirectories = () => {
  let dataStorage = localStorage.getItem("file-folder-collection");
  if (dataStorage) {
    return JSON.parse(dataStorage);
  } else {
    return createRootDirectory();
  }
};

export const updateLocalStorage = (fileFolderData) => {
  localStorage.setItem(
    "file-folder-collection",
    JSON.stringify(fileFolderData)
  );
};

export const getAllDirectoriesTillLevel2 = (allDirectoryData, lvl) => {
  let arr = [];
  if (lvl >= 2) return arr;
  allDirectoryData.forEach((item) => {
    if (item.type === "folder") {
      arr.push(item);
      if (item.children.length) {
        arr = [...arr, ...getAllDirectoriesTillLevel2(item.children, lvl + 1)];
      }
    }
  });
  return arr;
};
