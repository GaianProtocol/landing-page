export function createSlugUrl(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD") // Tách dấu ra khỏi chữ
    .replace(/[\u0300-\u036f]/g, "") // Xóa dấu
    .replace(/[^\w\s-]/g, "") // Xoá ký tự đặc biệt như :
    .replace(/\s+/g, "-") // Thay khoảng trắng bằng -
    .replace(/--+/g, "-") // Gộp dấu -
    .replace(/^-+|-+$/g, ""); // Xoá - đầu/cuối
}
