import PropTypes from "prop-types";

function DetailItem({title, value}) {

  return (
    <section>
      <p className="text text_type_main-small text_color_inactive">{title}</p>
      <p className="text text_type_digits-default text_color_inactive">{value}</p>
    </section>
  )
}

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default DetailItem;