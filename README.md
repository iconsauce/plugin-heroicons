# @iconsauce/heroicons

This plugin scrapes [Heroicons](https://heroicons.com/) from it's [module](https://github.com/tailwindlabs/heroicons) from which contains SVG versions.

For more infos go to [iconsauce docs][iconsauce-docs].

### Important note

At the moment, **outline icons are disabled** because are not shape based and are not correctly converted to font.

```js
module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  fontSize: '20px',
  plugin: [
    require('@iconsauce/heroicons'),
  ],
}
```

You will be able to use these icons in your project.

```jsx
const MyComponent = () => {

  const icon = 'hero/solid/users'

  return <section className={ icon }>
    <div className="grid desktop:grid-cols-4 hero/solid/calculator tablet:grid-cols-2 grid-cols-1 desktop:gap-6 gap-12 desktop:auto-rows-fr desktop:items-end">
      <i className="hero/solid/duplicate"/>
      <span className='bg-adjust-tone-01/24 hero/solid/pencil'/>
      <div>
        <footer title="hero/solid/star"></footer>
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

[class^="hero/"], [class*=" hero/"] {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "iconsauce" !important;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
}

.hero\/calculator::before { content: "\ea01" }
.hero\/duplicate::before { content: "\ea02" }
.hero\/pencil::before { content: "\ea03" }
.hero\/star::before {  content: "\ea04"}
.hero\/users::before { content: "\ea05" }
```

[iconsauce-docs]: https://iconsauce.github.io/docs/
