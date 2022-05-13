/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{ variant: "links.logo", mr: 15, cursor: "pointer", display: "flex" }}
      {...rest}
    >
      <Image src={src} alt="next js landing logo" />
    </Link>
  );
}
