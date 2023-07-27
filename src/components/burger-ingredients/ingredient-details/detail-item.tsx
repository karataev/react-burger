import {JSX} from "react";

type TDetailItemProps = {
  title: string;
  value: number;
}

function DetailItem({title, value}: TDetailItemProps): JSX.Element {

  return (
    <section>
      <p className="text text_type_main-small text_color_inactive">{title}</p>
      <p className="text text_type_digits-default text_color_inactive">{value}</p>
    </section>
  )
}

export default DetailItem;