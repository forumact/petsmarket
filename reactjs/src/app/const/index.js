export const ItemCategory = ["Fancy", "Homing", "Racing"];

export const ItemConditions = [
  "Chick",
  "Patta",
  "Adult",
  "Pair",
  "Male",
  "Female",
  "Mixed Gender",
  "Trio"
];

export const ItemStatus = ["Available", "SoldOut"];

export const Vr = ["Vectorized", "Rasterized"];

export const city = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Tiruchirappalli",
  "Tiruppur",
  "Salem",
  "Erode",
  "Tirunelveli",
  "Vellore",
  "Thoothukkudi",
  "Dindigul",
  "Thanjavur",
  "Ranipet",
  "Sivakasi",
  "Karur",
  "Udhagamandalam",
  "Hosur",
  "Nagercoil",
  "Kancheepuram",
  "Kumarapalayam",
  "Karaikkudi",
  "Neyveli",
  "Cuddalore",
  "Kumbakonam",
  "Tiruvannamalai",
  "Pollachi",
  "Rajapalayam",
  "Gudiyatham",
  "Pudukkottai",
  "Vaniyambadi",
  "Ambur",
  "Nagapattinam"
];

export const PigeonCategory = [
  "All",
  "Fancy",
  "Racing",
  "Homing",
  "Chicks",
  "Patta"
];

export const AdvertType = ["For Sale", "Wanted"];

export const RegisterFormValidate = [
  {
    field: "first_name",
    method: "isEmpty",
    validWhen: false,
    message: "First name is empty."
  },
  {
    field: "last_name",
    method: "isEmpty",
    validWhen: false,
    message: "Last name is empty."
  },
  {
    field: "user_name",
    method: "isEmpty",
    validWhen: false,
    message: "Account Name is required."
  },
  {
    field: "city",
    method: "isEmpty",
    validWhen: false,
    message: "City is required."
  },
  {
    field: "email",
    method: "isEmail",
    validWhen: true,
    message: "That is not a valid email."
  },
  {
    field: "password",
    method: "isEmpty",
    validWhen: false,
    message: "Password is required."
  },
  {
    field: "user_picture",
    method: "isEmpty",
    validWhen: false,
    message: "Profile Image is required."
  }
];

export const AccountFormValidation = [
  {
    field: "first_name",
    method: "isEmpty",
    validWhen: false,
    message: "First name is empty."
  },
  {
    field: "last_name",
    method: "isEmpty",
    validWhen: false,
    message: "Last name is empty."
  },
  {
    field: "username",
    method: "isEmpty",
    validWhen: false,
    message: "Username is required."
  },
  {
    field: "mobile",
    method: "matches",
    args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
    validWhen: true,
    message: "Mobile is required."
  },
  {
    field: "website",
    method: "isEmpty",
    validWhen: false,
    message: "Website is required."
  },
  {
    field: "email",
    method: "isEmail",
    validWhen: true,
    message: "Email is required."
  },
  {
    field: "city",
    method: "isEmpty",
    validWhen: false,
    message: "City is required."
  },
  {
    field: "about",
    method: "isEmpty",
    validWhen: false,
    message: "About is required."
  },
  {
    field: "user_picture",
    method: "isEmpty",
    validWhen: false,
    message: "Profile picture is required."
  }
];

export const UploadFormValidation = [
  {
    field: "item_category",
    method: "isEmpty",
    validWhen: false,
    message: "Category is empty."
  },
  {
    field: "item_name",
    method: "isEmpty",
    validWhen: false,
    message: "Advert Title is empty."
  },
  {
    field: "item_description",
    method: "isEmpty",
    validWhen: false,
    message: "Description is required."
  },
  {
    field: "item_picture1",
    method: "isEmpty",
    validWhen: false,
    message: "Picture is required."
  },
  {
    field: "item_price",
    method: "isEmpty",
    validWhen: false,
    message: "Price is required."
  },
  {
    field: "item_status",
    method: "isEmpty",
    validWhen: false,
    message: "Status is required."
  },
  {
    field: "item_conditions",
    method: "isEmpty",
    validWhen: false,
    message: "Gender is required."
  },
  {
    field: "item_city",
    method: "isEmpty",
    validWhen: false,
    message: "City is required."
  },
  {
    field: "item_tags",
    method: "isEmpty",
    validWhen: false,
    message: "Tags is required."
  },
  {
    field: "item_advert_type",
    method: "isEmpty",
    validWhen: false,
    message: "Advert type is empty."
  }
];

export const LoginFormValidation = [
  {
    field: "username",
    method: "isEmpty",
    validWhen: false,
    message: "Username is empty."
  },
  {
    field: "password",
    method: "isEmpty",
    validWhen: false,
    message: "Password is empty."
  }
];

export const FileApiArray = [
  {
    id: "1",
    url: "/api/v1/file/upload/node/pigeon/field_pigeon1"
  },
  {
    id: 2,
    url: "/api/v1/file/upload/node/pigeon/field_pigeon2"
  },
  {
    id: 3,
    url: "/api/v1/file/upload/node/pigeon/field_pigeon3"
  },
  {
    id: 4,
    url: "/api/v1/file/upload/node/pigeon/field_pigeon4"
  }
];

export const numberofitem = 12;
export const commentnumber = 5;

export const CommentFormValidation = [
  {
    field: "comment",
    method: "isEmpty",
    validWhen: false,
    message: "Comment is empty."
  }
];

export const HomeSearchFormValidation = [
  {
    field: "search",
    method: "isEmpty",
    validWhen: false,
    message: "Search is empty."
  }
];

export const NewsletterFormValidation = [
  {
    field: "subscribe_email",
    method: "isEmail",
    validWhen: true,
    message: "That is not a valid email."
  }
];

export const facebookLink = "https://www.facebook.com/petsmarket.co.in";

export const twitterLink = "https://twitter.com/PetsMarket3";

export const documentTitle = "PetsMarket";

export const googleClientID =
  "1000944645619-7sc2pdff16fp95tqpm08vb9lm9h8r3b7.apps.googleusercontent.com";

export const ProdUrl = 'http://petsmarket.co.in/';
