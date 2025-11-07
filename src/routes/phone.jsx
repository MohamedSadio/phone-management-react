import db from '../data/db.json'

export const loadPhoneById = ({params}) => {
  const smartphone = db?.smartphones?.find((smartphone)=>smartphone?.id.toString()===params?.phoneId?.toString());
    return {smartphone};
}

