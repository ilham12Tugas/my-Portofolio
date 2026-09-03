import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from "react-icons/fa6";

/**
 * Ikon platform yang TIDAK memakai gaya pixel — pakai logo asli dari react-icons.
 * key harus sama dengan field `icon` di siteData.js / key di contactMethods.
 */
export const BRAND_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
  tiktok: FaTiktok,
  email: FaEnvelope,
};

export default BRAND_ICONS;
