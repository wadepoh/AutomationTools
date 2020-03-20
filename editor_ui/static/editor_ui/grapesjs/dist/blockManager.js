//Main thing to run grapesjs
var editor = grapesjs.init({
    height: '100%',
    showOffsets: 1,
    noticeOnUnload: 0,
    storageManager: { autoload: 0 },
    container: '#gjs',
    fromElement: true,
    plugins: ['gjs-preset-webpage'],
    pluginsOpts: {
      'gjs-preset-webpage': {}
    }
  });

///////////////////////////////////////////////////////

//Example of handling grapesjs wrapper
// const wrapper = editor.DomComponents.getWrapper();
// console.log(wrapper);
// wrapper.set('style',{'background-color':'red'})
// const myComponent = wrapper.find('#testing')[0];
// console.log(myComponent);

///////////////////////////////////////////////////////

//Example of inserting js with components
// editor.DomComponents.addType('foo-button', {
// model: {
//     defaults: {
//         tagName: "button",
//         name: "Button",
//         content: "Button",
//         script: function() {
//           this.addEventListener("click", () => {
//         alert("Meow");
//         console.log("meow");
//           });
//         }
//     }
// }
// })

// editor.BlockManager.add("button-block", {
// label: "ahha",
// category: "Forms",
// attributes: {class: 'gjs-fonts gjs-f-b1'},
// content: { type: 'foo-button' }
// });

///////////////////////////////////////////////////////

