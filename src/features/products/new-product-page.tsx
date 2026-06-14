import { useState } from "react";
import type { SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "./services/products-api";

export function NewProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [isOnSale, setIsOnSale] = useState(false);
  const [tags, setTags] = useState<string[]>([]);

  const navigate = useNavigate();

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const createdProduct = await createProduct({
      id: 0,
      name,
      price,
      tags,
      image: "",
      isOnSale,
      description,
    });
    navigate(`/products/${createdProduct.id}`);
  }

  function handleTagChange(tag: string) {
    if (tags.includes(tag)) {
      setTags(tags.filter((currentTag) => currentTag !== tag));
    } else {
      setTags([...tags, tag]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre producto</label>
      <input
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="price">Precio</label>
      <input
        id="price"
        type="number"
        value={price}
        onChange={(event) => setPrice(Number(event.target.value))}
      />
      <label htmlFor="description">Descripción</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label htmlFor="isOnSale">Oferta</label>
      <input
        id="isOnSale"
        type="checkbox"
        checked={isOnSale}
        onChange={(event) => setIsOnSale(event.target.checked)}
      />
      <fieldset>
        <legend>Tags</legend>

        {["motor", "work", "lifestyle", "mobile", "motorcycle"].map((tag) => (
          <label key={tag}>
            <input
              type="checkbox"
              checked={tags.includes(tag)}
              onChange={() => handleTagChange(tag)}
            />
            {tag}
          </label>
        ))}
      </fieldset>

      <button type="submit">Crear Producto</button>
    </form>
  );
}
