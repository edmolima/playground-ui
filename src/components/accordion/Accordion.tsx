import { Activity, useState, type JSX } from "react";

type AccordionProps = {
  title: string;
  content: string;
}

export const Accordion = (props: AccordionProps): JSX.Element => {
  const { title, content } = props;
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="w-full">
      <section className="accordion-trigger" onClick={toggleAccordion}>
        <button>
          {title}
        </button>
      </section>
        <Activity mode={isActive ? "visible" : "hidden"}>
          <section className="accordion-content mt-2">
            {content}
          </section>
        </Activity>
    </section>
  )
}
