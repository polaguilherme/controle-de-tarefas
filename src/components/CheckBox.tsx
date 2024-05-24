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
          className=" flex w-6 h-6 appearance-none items-center justify-center rounded-full bg-[#262626] border border-[#4EA8DE]  outline-none "
          defaultChecked={false}
          id="c1"
        >
          <Checkbox.Indicator className="text-white bg-[#8284FA] rounded-full w-5 h-5 flex items-center justify-center checked:border-none">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
    </form>
  );
}
