import { Checklist } from "@/types";
import Image from "next/image";

interface Props {
  checklists: Checklist[];
}
const CheckLists = ({ checklists }: Props) => {
  return (
    <div>
      {checklists.map((el) => (
        <div key={el.id} className="flex items-center gap-4" style={{ color: el.color }}>
          <Image src={el.icon} width={20} height={20} alt={el.text + "Icon"} />
          <h4>{el.text}</h4>
        </div>
      ))}
    </div>
  );
};

export default CheckLists;
