export async function typeText(
  text: string,
  onUpdate: (text: string) => void
) {
  let current = "";

  for (const letter of text) {
    current += letter;

    onUpdate(current);

    await new Promise((resolve) =>
      setTimeout(resolve, 15)
    );
  }
}