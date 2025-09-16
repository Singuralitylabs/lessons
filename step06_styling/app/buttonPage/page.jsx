"use client";

import BootstrapButton from "../components/BootstrapButton";
import CSSinJSButton from "../components/CSSinJSButton";
import MantineButton from "../components/MantineButton";
import ModulesButton from "../components/ModulesButton";
import TailwindButton from "../components/TailwindCSSButton";
import TraditionalCSSButton from "../components/TraditionalCSSButton";

function ButtonPage() {
  return (
    <div>
      <h1 className="text-2xl m-4">各手法でのボタン一覧</h1>
      <div className="p-4 flex justify-between items-center">
        <TraditionalCSSButton
          disabled={false}
          onClick={() => alert("Traditional CSS button was Clicked!")}
        >
          従来のCSSボタン
        </TraditionalCSSButton>
        <CSSinJSButton disabled={false} onClick={() => alert("CSS in JS button was Clicked!")}>
          CSS-in-JSボタン
        </CSSinJSButton>
        <ModulesButton disabled={false} onClick={() => alert("CSS Modules button was Clicked!")}>
          CSS Modulesボタン
        </ModulesButton>
        <BootstrapButton disabled={false} onClick={() => alert("Bootstrap button was Clicked!")}>
          Bootstrapボタン
        </BootstrapButton>
        <TailwindButton disabled={false} onClick={() => alert("Tailwind CSS button was Clicked!")}>
          Tailwind CSSボタン
        </TailwindButton>
        <MantineButton disabled={false} onClick={() => alert("Mantine button was Clicked!")}>
          Mantineボタン
        </MantineButton>
      </div>
    </div>
  );
}

export default ButtonPage;
