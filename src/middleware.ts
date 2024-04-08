// export {default} from 'next-auth/middleware'
import { withAuth } from "next-auth/middleware";
export default withAuth({
    secret: process.env.SECRET,
  });
export const config = {matcher:['/']}