const files = [
  "./src/common/pokeApp.js",
];

function importFiles(files) {
  const selectAnchorJStag = document.getElementById("JSinject");
  files.map((el) => {
    const createJSfileConnect = document.createElement("script");
    createJSfileConnect.setAttribute("src", el);

    document.body.insertBefore(createJSfileConnect, selectAnchorJStag);
  });
}
importFiles(files);
