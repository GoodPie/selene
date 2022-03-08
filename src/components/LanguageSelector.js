export  function LanguageSelector(props) {
  return (
    <div id="language-selector">
      <span onClick={() => {props.setLanguage("en");}}>
          EN
      </span>
      |
      <span onClick={() => {props.setLanguage("es");}}>
        ES
      </span>
    </div>
  );
}
