//import { CopyBlock } from "react-code-blocks";

export default function Story() {
  return (
    <>
      <p>
        Now that we have Storybook installed in our project, lets understand
        whats going on with the examples that it came with.
      </p>
      <p>If you dont have Storybook running yet, make sure to run it with:</p>
      <div>
        <textarea data-iscodemirror="true">yarn storybook</textarea>
      </div>
      <h2 className="heading-anchor-text" id="the-concepts-around-storybook">
        <span>Component Story Format (CSF)</span>
        <a
          className="d-inline heading-anchor"
          title="Direct link to heading"
          href="#the-concepts-around-storybook"
        >
          #
        </a>
      </h2>
      <p>
        Storybook supports Component Story Format (CSF), an open standard based
        on ES6 modules which was introduced in Storybook 6.0 as the main way to
        write <strong>stories</strong>.
      </p>
      <p>
        In CSF, stories and component metadata are defined as ES Modules. Every
        component story file consists of a required default export and one or
        more named exports.
      </p>
      <h3 className="heading-anchor-text" id="default-export">
        <span>Default export</span>
        <a
          className="d-inline heading-anchor"
          title="Direct link to heading"
          href="#default-export"
        >
          #
        </a>
      </h3>
      <p>
        The{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#Using_the_default_export"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          default export
        </a>{" "}
        is what we call <strong>Meta</strong>, the metadata that describes and
        configures a component. This is the place where you can set the title,
        which will be shown in the list of stories, or set extra configuration,
        which can be used by addons.
      </p>
      <p>Lets start by adding the following:</p>
    </>
  );
}
/*<CopyBlock
  language="javascript"
  text={
    "// Button.stories.tsx import { ComponentMeta } from '@storybook/react' import { Button } from './Button' export default { title: 'Example/Button', component: Button, argTypes: { backgroundColor: { control: 'color' }, }, } as ComponentMeta&lt;typeof Button&gt;; // ComponentMeta automatically infers the props from Button			"
  }
  codeBlock
/>;*/
