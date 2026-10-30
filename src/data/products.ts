export interface Product {
  name: string;
  meta: string;
  price: string;
  oldPrice?: string;
  icon: string;
  badge?: string;
  bg: string;
  category: string;
}

export const products: Product[] = [
  // Honning & Syltetøy
  { name: 'Lynghonning Premium', meta: '500g · Hardangervidda', price: 'kr 189', icon: '🍯', badge: 'Ny', bg: 'linear-gradient(135deg,#E8D5BF,#C4A882)', category: 'Honning & Syltetøy' },
  { name: 'Morgen-honning', meta: '350g · Telemark', price: 'kr 149', icon: '🍯', bg: 'linear-gradient(135deg,#F0DEC0,#D4A860)', category: 'Honning & Syltetøy' },
  { name: 'Blåbær syltetøy', meta: '300g · Trysil', price: 'kr 149', icon: '🫐', bg: 'linear-gradient(135deg,#D8D0E8,#8870AA)', category: 'Honning & Syltetøy' },
  { name: 'Jordbær-rips syltetøy', meta: '300g · Østfold', price: 'kr 139', icon: '🍓', bg: 'linear-gradient(135deg,#F0D0D0,#D07878)', category: 'Honning & Syltetøy' },

  // Urter
  { name: 'Vill Brennesle-te', meta: '40g · Hamar', price: 'kr 129', icon: '🌱', bg: 'linear-gradient(135deg,#D4E8D0,#8AAF82)', category: 'Urter' },
  { name: 'Tørket Timian', meta: '20g · Rogaland', price: 'kr 89', icon: '🌿', bg: 'linear-gradient(135deg,#E0E8D8,#7A9E6E)', category: 'Urter' },
  { name: 'Rosenblad te', meta: '30g · Agder', price: 'kr 109', icon: '🌹', bg: 'linear-gradient(135deg,#E8D8D0,#C09080)', category: 'Urter' },
  { name: 'Kamille te', meta: '25g · Vestfold', price: 'kr 99', icon: '🌼', bg: 'linear-gradient(135deg,#F0EAC8,#D4C078)', category: 'Urter' },

  // Oljer
  { name: 'Valnøtt-olje', meta: '250ml · Vestfold', price: 'kr 149', oldPrice: 'kr 179', icon: '🫙', bg: 'linear-gradient(135deg,#E8D8C4,#B89070)', category: 'Oljer' },
  { name: 'Skogssopp ekstrakt', meta: '100ml · Telemark', price: 'kr 249', icon: '🍄', badge: 'Bestselger', bg: 'linear-gradient(135deg,#E8E0C8,#BEB080)', category: 'Oljer' },
  { name: 'Hageurt-olje', meta: '200ml · Hedmark', price: 'kr 169', icon: '🌾', bg: 'linear-gradient(135deg,#E4DCC0,#A89858)', category: 'Oljer' },
  { name: 'Linolje kaldpresset', meta: '500ml · Trøndelag', price: 'kr 199', icon: '🫗', bg: 'linear-gradient(135deg,#DDE8D4,#8AA870)', category: 'Oljer' },

  // Kroppspleie
  { name: 'Havtorn body lotion', meta: '200ml · Møre', price: 'kr 219', icon: '🧴', bg: 'linear-gradient(135deg,#C8D8E0,#6898A0)', category: 'Kroppspleie' },
  { name: 'Lavendel håndkrem', meta: '75ml · Agder', price: 'kr 169', icon: '💜', bg: 'linear-gradient(135deg,#E0D8F0,#9880C8)', category: 'Kroppspleie' },
  { name: 'Birk body wash', meta: '300ml · Nordland', price: 'kr 189', icon: '🚿', bg: 'linear-gradient(135deg,#D8E8D8,#78A878)', category: 'Kroppspleie' },
  { name: 'Einer ansiktsolje', meta: '30ml · Hardanger', price: 'kr 279', badge: 'Ny', icon: '✨', bg: 'linear-gradient(135deg,#D8E0E8,#7090A8)', category: 'Kroppspleie' },
];

export const categories = [
  { icon: '🍯', name: 'Honning & Syltetøy', count: '24 produkter' },
  { icon: '🌿', name: 'Urter & Krydder', count: '18 produkter' },
  { icon: '🫙', name: 'Oljer & Eddiker', count: '15 produkter' },
  { icon: '🧴', name: 'Kroppspleie', count: '22 produkter' },
  { icon: '🫖', name: 'Te & Drikke', count: '19 produkter' },
  { icon: '🍫', name: 'Snacks & Søtt', count: '12 produkter' },
  { icon: '🌱', name: 'Frø & Planting', count: '8 produkter' },
  { icon: '🎁', name: 'Gavesett', count: '10 produkter' },
];
