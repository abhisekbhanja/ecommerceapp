export const addproduct = (title, image, price, id,email) => {
  return {
    type: "add",
    title: title,
    image: image,
    price: price,
    id: id,
    email:email
  };
};

export const removeproduct = (q3,userid) => {
  return {
    type: "delete_item",
    q3: q3,
    userid:userid
  };
};

export const incquantity = (q1,userid) => {
  return {
    type: "in",
    q1: q1,
    userid:userid
    };
};
export const decquantity = (q2,userid,product_price) => {
  return {
    type: "dc",
    q2: q2,
    userid:userid,
    product_price:product_price
  };
};

export const loginuser=(loginData)=>{
  return {
    type: "login",
    loginData:loginData
  };
}

export const signupuser=(signupData)=>{
  return {
    type: "signup",
    signupData:signupData
  };
}
