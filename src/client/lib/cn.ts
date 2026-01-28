/**
 * 条件付きで className を結合するユーティリティ関数
 *
 * @example
 * cn("h-4 w-4", isLoading && "animate-spin", className)
 *
 * @param classes - 文字列、false、null、undefined を含む className の配列
 * @returns 有効な className のみを空白区切りで結合した文字列
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}