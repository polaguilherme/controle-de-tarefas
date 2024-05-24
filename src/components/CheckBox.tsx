import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface CheckBoxProps {
  handleConclusedTasks: () => void;
  checked: boolean;
}

export function CheckboxComponent({
  handleConclusedTasks,
  checked,
}: CheckBoxProps) {
  return (
    <form>
      <div className="flex items-center">
        <Checkbox.Root
          onCheckedChange={handleConclusedTasks}
          checked={checked}
          className={`flex w-6 h-6 appearance-none items-center justify-center rounded-full bg-transparent border border-Blue-primary outline-none transition-all duration-500 ${
            checked && "border-0"
          }`}
          defaultChecked={false}
          id="c1"
        >
          <Checkbox.Indicator
            className={`text-white bg-Purple-primary rounded-full w-6 h-6 flex items-center justify-center transition-all duration-500`}
          >
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
    </form>
  );
}
