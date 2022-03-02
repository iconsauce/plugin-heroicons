# @iconsauce/mdi-svg

This plugin scrapes [Material Design Icons](https://materialdesignicons.com/) of [@mdi/svg](https://github.com/Templarian/MaterialDesign-SVG) from which contains SVG versions.

For more infos go to [iconsauce docs][iconsauce-docs].

```js
module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  fontSize: '24px',
  plugin: [
    require('@iconsauce/mdi-svg'),
  ],
}
```

You will be able to use these icons in your project.

```jsx
const MyComponent = () => {

  const icon = 'mdi/grass'

  return <section className={ icon }>
    <div className="grid desktop:grid-cols-4 mdi/emoticon-happy tablet:grid-cols-2 grid-cols-1 desktop:gap-6 gap-12 desktop:auto-rows-fr desktop:items-end">
      <i className="mdi/access-point"/>
      <span className='bg-adjust-tone-01/24 mgg/terminal'/>
      <div>
        <footer title="mdi/gondola"></footer>
      </div>
    </div>
  </section>
}
export default MyComponent
```

This plug-in will generate only icons used:

```css
@font-face {
  font-family: "iconsauce";
  src: url("data:font/truetype;charset=utf-8;base64,A...Z") format("truetype");
}

[class^="mdi/"], [class*=" mdi/"] {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "iconsauce" !important;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
}

.mdi\/access-point::before { content: "\ea01" }
.mdi\/emoticon-happy::before { content: "\ea02" }
.mdi\/gondola::before { content: "\ea03" }
.mdi\/grass::before { content: "\ea04" }
.mdi\/harddisk::before { content: "\ea05" }
```

[iconsauce-docs]: https://iconsauce.github.io/docs/
