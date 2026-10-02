export function toBulletPoints(text) {
  return text
    .split(/\. (?=[A-Z])/)
    .map(line => line.trim())
    .filter(line => line !== "")
}