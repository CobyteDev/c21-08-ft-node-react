</br>

![Static Badge](https://img.shields.io/badge/Postman-orange?logo=postman&logoColor=white) - [Kramer-backend](https://documenter.getpostman.com/view/29130737/2sAY4skQP4)

</br>

# Documentacion del backend - E-commerce local de venta de frutas y verduras.

</br>

## 1. Descripcion General del Proyecto

El backend de este proyecto es una API REST que permite a los usuarios registrarse, iniciar sesión, y comprar y vender productos de almacen, principalmente enfocado en frutas y verduras. El usuario podra ver una lista de productos y agregarlos al carrito para su eventual compra.
Tambien podra ver las promociones disponibles, y filtrar las busquedas por categoria, precio, marca, entre otros.

</br>

## 2. Stack tecnologico

- **Lenguaje:** Typescript
- **Entorno de ejecucion:** Node js
- **Sistema de contenedores:** Docker
- **Base de datos:** MySQL
- **Autenticacion:** JWT
- **Servicios externos:** Mercado Pago (pagos)

</br>

## 3. Configuracion del Entorno

### a) Instalacion de dependencias

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raiz del proyecto

```bash
npm install
```

### b) Variables de entorno

```bash
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=root
DB_NAME=kramer
```

### c) Como ejecutar el proyecto

```bash
npm run dev
```

</br>

## 4. Arquitectura del sistema

### a) Estructuracion de las carpetas

```bash
src/
├── common/
├── controllers/
├── dto/
├── entities/
├── exceptions/
├── middlewares/
├── repositories/
├── routes/
├── services/
├── app.ts
├── data-source.ts
├── server.ts
```

</br>

### b) Diagrama de arquitectura
![Captura de pantalla 2024-10-21 182813](https://github.com/user-attachments/assets/66016b47-1889-4e98-8402-a1083a4ae275)

</br>

## 5. Mercado Pago - `Cuentas de prueba`

### Comprador:
``` bash
Nombre de usuario: TESTUSER472292105
Contraseña: urifnMnwFI
```

### Vendedor:
``` bash
Nombre de usuario: TESTUSER1599894772
Contraseña: QbzG9hYbFt
```

</br>

## 6. Endpoints de la API

## **Usuarios**

### **GET:** `/user`

- **Descripcion:** Metodo que devuelve un arreglo con todos los usuarios disponibles en la base de datos
- **Parametros:** No se requieren parametros

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un arreglo de objetos de tipo User, si no hay usuarios devuelve un arreglo vacio `[]`
- **Body:**
```json
[
  {
    "userId": "user01",
    "name": "John Doe",
    "email": "john@gmail.com",
    "role": "client"
  },
  {
    "userId": "user02",
    "name": "Lianne Keitha",
    "email": "lianne@gmail.com",
    "role": "client"
  }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos

</br>

---

</br>

## **Categorias**

### **GET:** `/category`

- **Descripcion:** Metodo que devuelve un arreglo con todas las categorias disponibles en la base de datos
- **Parametros:** No se requieren parametros

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un arreglo de objetos de tipo Category, si no hay categorias devuelve un arreglo vacio `[]`
- **Body:**
```json
[
  {
    "categoryId": "cat01",
    "categoryName": "Categoria 1"
  },
  {
    "categoryId": "cat02",
    "categoryName": "Categoria 2"
  }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos

</br>

---

</br>

## **Crear Productos**

### **GET:** `/product/createProduct`

- **Descripcion:** Metedo que crea un nuevo producto. 
- **Parametros:** No se requiere parametros

### **Respuesta exitosa:**

- **Status:** `201 Created`
- **Contenido:** Si la creación es exitosa, se devuelve el nuevo producto en formato JSON
- **Body:** 
```json
{
  "productId": "uuid",     
  "name": "string",
  "price": number,
  "unitOfMeasurement": "string",
  "description": "string",
  "stock": number,
  "imgUrl": "string | null",
  "brand": "string | null",
  "category": { "categoryId": "string", "name": "string" }, 
  "promotion": { "promotionId": "string", "name": "string" } 
}
```

#### **Posibles errores:**

- **400 Bad Request:** Este error ocurre cuando faltan parámetros requeridos o se proporcionan valores inválidos.
```json
{
  "statusCode": 400,
  "message": "Invalid or missing parameters",
  "errors": [
    "Name is required",
    "Price must be a positive number",
    "Invalid unit of measurement"
  ]
}
```

- **404 Not Found:** Ocurre cuando no se encuentra la categoría o promoción.
```json
{
  "statusCode": 404,
  "message": "Category not found"
}
```

- **500 Internal Server Error:** Si ocurre un error interno del servidor al intentar crear el producto, se devuelve un mensaje genérico.
```json
{
  "statusCode": 500,
  "message": "Error creating product"
}
```

## **Editar Producto**

### **PUT:** `/product/editProduct/:productId`

- **Descripcion:** Este endpoint permite actualizar la información de un producto existente en el sistema. Se debe enviar un objeto JSON en el cuerpo de la solicitud con los campos que se desean actualizar.
- **Parametros:** productId (path parameter): ID del producto a actualizar.

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** 
- **Body:**
```json
{
  "id": "producto_id",
  "nameProduc": "Nuevo nombre",
  "weight": 1.5,
  "price": 20.99,
  "stock": 50,
  "imagen": "{
      full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
      medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
    }",
  "descripción": "Descripción actualizada",
  "status": "activo",
  "category": "categoría_id"
}
```
#### **Posibles errores:**

- **404 Not Found:** El producto con el ID especificado no fue encontrado.
```json
{
  "message": "Product not found"
}
```

- **500 Internal Server Error:** Error inesperado al intentar actualizar el producto.
```json
{
  "message": "Error updating product"
}
```

## **Eliminar Producto**

### **DELETE:** `/product/deleteProduct/:productId`

- **Descripcion:** Este endpoint permite eliminar un producto del sistema utilizando su ID. Si el producto se elimina con éxito, se devuelve un mensaje de confirmación.
- **Parametros:** productId (path parameter): ID del producto a eliminar.

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** 
- **Body:**
```json
{
  "message": "Producto eliminado exitosamente"
}
```

#### **Posibles errores:**

- **404 Not Found:** El producto con el ID especificado no fue encontrado.
```json
{
  "message": "Product not found"
}
```

- **500 Internal Server Error:** Error inesperado al intentar eliminar el producto.
```json
{
  "message": "Error al eliminar el producto",
  "error": "Descripción del error"
}
```

## **Mostrar todos los productos**

### **GET:** `/product`

- **Descripcion:** Metodo que devuelve un arreglo con todos los productos disponibles en la base de datos
- **Parametros:** No se requieren parametros

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un arreglo de objetos de tipo Product, si no hay productos devuelve un arreglo vacio `[]`
- **Body:**

```json
[
  {
    "productId": "prod01",
    "name": "aceite natura x 900ml.",
    "brand": "Natura",
    "price": 0,
    "unitOfMeasurement": "unitary",
    "description": "Aceite de girasol de primera calidad",
    "stock": 19,
    "imgUrl": "{
        full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
        medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
      }",
    "category": { "categoryId": "category04", "categoryName": "Almacen" },
    "promotion": {
      "promotionId": "promotion01",
      "percentage": 0.1
    }
  },
  {
    "productId": "prod02",
    "name": "banana ecuador",
    "brand": null,
    "price": 3400,
    "unitOfMeasurement": "kg",
    "description": "Tremendas bananas",
    "stock": 50,
    "imgUrl": "www.google.com/banana-ecuador",
    "category": { "categoryId": "category01", "categoryName": "Frutas" },
    "promotion": null
  }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos

</br>

### **GET:** `/product/category/:categoryId`

- **Descripcion:** Metodo que devuelve un arreglo con todos los productos de una categoria especifica
- **Parametros:**
  - `categoryId` (string): El id de la categoria

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un arreglo de objetos de tipo Product de una categoria en especifico, si no hay productos devuelve un arreglo vacio `[]`
- **Body:**

```json
[
  {
    "productId": "prod01",
    "name": "aceite natura x 900ml.",
    "brand": "Natura",
    "price": 0,
    "unitOfMeasurement": "unitary",
    "description": "Aceite de girasol de primera calidad",
    "stock": 19,
    "imgUrl": "{
        full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
        medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
      }",
    "category": { "categoryId": "category04", "categoryName": "Almacen" },
    "promotion": {
      "promotionId": "promotion01",
      "percentage": 0.1
    }
  },
  {
    "productId": "prod02",
    "name": "Fideos Marolio x 500gr.",
    "brand": null,
    "price": 3400,
    "unitOfMeasurement": "unitary",
    "description": "Los mejores fideos de la ciudad",
    "stock": 40,
    "imgUrl": "{
        full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
        medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
        }",
    "category": { "categoryId": "category04", "categoryName": "Almacen" },
    "promotion": null
  }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **404 Not Found:** Categoria no encontrada

</br>

### **GET:** `/product/promotion`

- **Descripcion:** Metodo que devuelve un arreglo con todos los productos que tienen descuento
- **Parametros:** No se requieren parametros

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un arreglo de objetos de tipo Product, si no hay productos devuelve un arreglo vacio `[]`
- **Body:**

```json
[
  {
    "productId": "prod02",
    "name": "Leche La Serenisima x 1L",
    "price": 2500,
    "unitOfMeasurement": "lt",
    "description": "La leche mas fresca",
    "stock": 150,
    "imgUrl": "{
        full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
        medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
      }",
    "brand": null,
    "category": {
      "categoryId": "cate02",
      "categoryName": "Bebidas"
    },
    "promotion": {
      "promotionId": "promo01",
      "percentage": 10
    }
  },
  {
    "productId": "prod03",
    "name": "Aceite Natura x 900ml",
    "price": 4200,
    "unitOfMeasurement": "lt",
    "description": "El mejor aceite",
    "stock": 150,
    "imgUrl": "{
        full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
        medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
      }",
    "brand": null,
    "category": {
      "categoryId": "cate02",
      "categoryName": "Bebidas"
    },
    "promotion": {
      "promotionId": "promo01",
      "percentage": 10
    }
  }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos

</br>

---

</br>

## Promociones

### **GET:** `/promotion`

- **Descripcion:** Metodo que devuelve un arreglo con todas las promociones disponibles en la base de datos
- **Parametros:** No se requieren parametros

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un arreglo de objetos de tipo Promotion, si no hay promociones devuelve un arreglo vacio `[]`
- **Body:**

```json
[
  {
    "promotionId": "prom01",
    "percentage": 0.1,
    "product": [
      {
        "productId": "prod01",
        "name": "aceite natura x 900ml.",
        "brand": "Natura",
        "price": 0,
        "unitOfMeasurement": "unitary",
        "description": "Aceite de girasol de primera calidad",
        "stock": 19,
        "imgUrl": "{
            full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
            medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
          }",
        "category": {
          "categoryId": "category04",
          "categoryName": "Almacen"
        },
        "promotion": {
          "promotionId": "promotion01",
          "percentage": 0.1
        }
      },
      {
        "productId": "prod02",
        "name": "Fideos Marolio x 500gr.",
        "brand": null,
        "price": 3400,
        "unitOfMeasurement": "unitary",
        "description": "Los mejores fideos de la ciudad",
        "stock": 40,
        "imgUrl": "{
            full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
            medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
          }",
        "category": {
          "categoryId": "category04",
          "categoryName": "Almacen"
        },
        "promotion": {
          "promotionId": "promotion01",
          "percentage": 0.1
        }
      }
    ]
  },
  {
    "promotionId": "prom01",
    "percentage": 0.1,
    "product": [
      {
        "productId": "prod01",
        "name": "aceite natura x 900ml.",
        "brand": "Natura",
        "price": 0,
        "unitOfMeasurement": "unitary",
        "description": "Aceite de girasol de primera calidad",
        "stock": 19,
        "imgUrl": "{
            full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
            medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
          }",
        "category": {
          "categoryId": "category04",
          "categoryName": "Almacen"
        },
        "promotion": {
          "promotionId": "promotion01",
          "percentage": 0.1
        }
      },
      {
        "productId": "prod02",
        "name": "Fideos Marolio x 500gr.",
        "brand": null,
        "price": 3400,
        "unitOfMeasurement": "unitary",
        "description": "Los mejores fideos de la ciudad",
        "stock": 40,
        "imgUrl": "{
            full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
            medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
          }",
        "category": {
          "categoryId": "category04",
          "categoryName": "Almacen"
        },
        "promotion": {
          "promotionId": "promotion01",
          "percentage": 0.1
        }
      }
    ]
  }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos

</br>

---

</br>

## Ordenes

### **GET:** `/order/all/confirmed`

- **Descripcion:** Metodo que devuelve todos los pedidos confirmados

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un arreglo de tipo ClientOrder[]
- **Body:**

```json
[
    {
        "clientOrderId": "4ec23eb3-4943-47f1-a6be-db14fc491150",
        "createdAt": "2024-10-24T12:33:58.000Z",
        "isConfirmed": true,
        "delivery": false,
        "methodOfPayment": "cash",
        "status": "unprepared"
    },
    {
        "clientOrderId": "e23b209d-a2d8-446f-982f-82d0ed760b28",
        "createdAt": "2024-10-27T01:58:09.000Z",
        "isConfirmed": true,
        "delivery": false,
        "methodOfPayment": "cash",
        "status": "unprepared"
    }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos

<br />

### **GET:** `/order/:clientOrderId`

- **Descripcion:** Metodo que devuelve un pedido por Id.
- **Parametros:**
```json
  {
    //Ejemplo: `http://localhost:3170/order/4ec23eb3-4943-47f1-a6be-db14fc491150`
    "clientOrderId": "4ec23eb3-4943-47f1-a6be-db14fc491150"
  }
  ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un objeto de tipo ClientOrder
- **Body:**

```json
{
    "clientOrderId": "4ec23eb3-4943-47f1-a6be-db14fc491150",
    "createdAt": "2024-10-24T12:33:58.000Z",
    "isConfirmed": false,
    "delivery": false,
    "methodOfPayment": "cash",
    "status": "unprepared"
}
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **404 Not Found:** Orden no encontrada

<br />

### **GET:** `/order/user/:userId`

- **Descripcion:** Metodo que devuelve los pedidos de un usuario en particular
- **Parametros:**
```json
  {
    //Ejemplo: `http://localhost:3170/order/user/3LunarID`
    "userId": "3LunarID"
  }
  ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un arreglo de tipo ClientOrder
- **Body:**

```json
[
    {
        "clientOrderId": "4ec23eb3-4943-47f1-a6be-db14fc491150",
        "createdAt": "2024-10-24T12:33:58.000Z",
        "isConfirmed": false,
        "delivery": false,
        "methodOfPayment": "cash",
        "status": "unprepared"
    },
    {
        "clientOrderId": "ca68b269-5627-48ab-81fe-95f888487626",
        "createdAt": "2024-10-23T19:29:39.000Z",
        "isConfirmed": false,
        "delivery": false,
        "methodOfPayment": "cash",
        "status": "unprepared"
    }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **404 Not Found:** Usuario no encontrado

<br />

### **POST:** `/order/create`

- **Descripcion:** Metodo que crea una orden de compra y envia un mail de confirmacion al usuario.
- **Parametros:**
```json
  {
    "userId": "user01",
    "delivery": true,
    "methodOfPayment": "electronic" 
  }

  // o

    {
    "userId": "user02",
    "delivery": false,
    "methodOfPayment": "cash" 
  }
  ```
  
 - **Enums:**
  ```javascript
   export enum MethodOfPayment {
    CASH = "cash",
    ELECTRONIC = "electronic"
   }
   ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un objeto con las propiedades message y orderId
- **Body:**

```json
{
    "message": "Order succesfully created",
    "orderId": "fd781742-c1a2-444a-9558-702d80d13860"
}
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **400 Bad Request:** Falta uno o mas parametros
```json
  {
    "message": [
      "userId must be a string",
      "delivery must be a boolean",
      "methodOfPayment must be a value of MethodOfPayment"
  ]
  }
  ```
- **400 Bad Request:** Propiedad no requerida por parametro
```json
  {
    "message": [
      "propiedadDeEjemplo must not exist",
  ]
  }
```

<br />

### **GET:** `/order/confirm`

- **Descripcion:** Metodo que confirma el pedido al ingresar desde el link proporcionado por el correo electronico
- **Queries:**
```json
  {
    //Al pasar la query la URL quedaria algo como `http://localhost:3170/order/confirm?orderId=fd781742-c1a2-444a-9558-702d80d13860`
    "orderId": "fd781742-c1a2-444a-9558-702d80d13860"
  }
  ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un objeto con las propiedades message y orderId
- **Body:**

```json
{
    "message": "Order succesfully confirmed",
    "orderId": "fd781742-c1a2-444a-9558-702d80d13860"
}
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **404 Not Found:** Orden no existente

<br/>

## **Carrito (entidad "OrderProduct")**

### **POST:** `/cart/:orderId`

- **Descripcion:** Metodo para asignar productos a una orden existente
- **Parametros:**
  ```json
  {
    //Ejemplo: `http://localhost:3170/cart/4ec23eb3-4943-47f1-a6be-db14fc491150`
    "orderId": "4ec23eb3-4943-47f1-a6be-db14fc491150"
  }
  ```
  
- **Body:**
  ```json
  {
    "products": [
        {
            "productId": "10VinoID",
            "productQty": 2
        },
        {
            "productId": "11ChampagneID",
            "productQty": 3
        }
    ]
  }
  ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un mensaje que indica que los products fueron añadidos al carrito satisfactoriamente
- **Body:**

```json
{
    "message": "Products added to cart succesfully"
}
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **404 Not Found:** Orden no encontrada
- **404 Not Found:** Producto no encontrado

</br>

### **GET:** `/cart/:orderId`

- **Descripcion:** Metodo para obtener el "carrito" completo de una orden en especifico
- **Parametros:**
  ```json
  {
    //Ejemplo: `http://localhost:3170/cart/4ec23eb3-4943-47f1-a6be-db14fc491150`
    "orderId": "4ec23eb3-4943-47f1-a6be-db14fc491150"
  }
  ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un array de tipo `OrderProduct`
- **Body:**

```json
[
    {
        "orderProductId": "1c9808fa-fe6a-4ef4-bed2-602c92750e63",
        "quantity": 3,
        "clientOrder": {
            "clientOrderId": "4ec23eb3-4943-47f1-a6be-db14fc491150",
            "createdAt": "2024-10-24T12:33:58.000Z",
            "isConfirmed": false,
            "delivery": false,
            "methodOfPayment": "cash",
            "status": "unprepared"
        },
        "product": {
            "productId": "11ChampagneID",
            "name": "Champagne brut",
            "price": 3449.75,
            "unitOfMeasurement": "unitary",
            "description": "Champagne brut, ideal para ocasiones especiales",
            "stock": 30,
        "imgUrl": "{
            full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
            medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
          }",
            "brand": "arcor",
            "category": {
                "categoryId": "4",
                "categoryName": "vinoteca",
                "categoryLabel": "Vinoteca",
                "featured": true
            },
            "promotion": null
        }
    },
    {
        "orderProductId": "b5365590-209a-4aa2-83de-c3e9eb3cc32b",
        "quantity": 2,
        "clientOrder": {
            "clientOrderId": "4ec23eb3-4943-47f1-a6be-db14fc491150",
            "createdAt": "2024-10-24T12:33:58.000Z",
            "isConfirmed": false,
            "delivery": false,
            "methodOfPayment": "cash",
            "status": "unprepared"
        },
        "product": {
            "productId": "10VinoID",
            "name": "Vino tinto reserva",
            "price": 2299.99,
            "unitOfMeasurement": "unitary",
            "description": "Vino tinto reserva, con 12 meses de crianza",
            "stock": 14,
            "imgUrl": "{
                full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
                medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
              }",
            "brand": "arcor",
            "category": {
                "categoryId": "4",
                "categoryName": "vinoteca",
                "categoryLabel": "Vinoteca",
                "featured": true
            },
            "promotion": {
                "promotionId": "1",
                "percentage": "0.05"
            }
        }
    }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **400 Bad Request:** La orden esta vacia (no tiene productos asignados)
- **404 Not Found:** Orden no encontrada

</br>

### **GET:** `/cart/history/:userId`

- **Descripcion:** Metodo para obtener el historial de compras de un usuario
- **Parametros:**
  ```json
  {
    //Ejemplo: `http://localhost:3170/cart/history/2TomasID`
    "userId": "2TomasID"
  }
  ```

#### **Respuesta exitosa:**

- **Status:** `200 OK`
- **Contenido:** Un array de tipo `{ "date": string,  cart: OrderProduct[] }`
- **Body:**

```json
[
    {
        "date": "2024-10-24T12:33:58.000Z",
        "cart": [
            {
                "orderProductId": "1c9808fa-fe6a-4ef4-bed2-602c92750e63",
                "quantity": 3,
                "clientOrder": {
                    "clientOrderId": "4ec23eb3-4943-47f1-a6be-db14fc491150",
                    "createdAt": "2024-10-24T12:33:58.000Z",
                    "isConfirmed": true,
                    "delivery": false,
                    "methodOfPayment": "cash",
                    "status": "unprepared"
                },
                "product": {
                    "productId": "11ChampagneID",
                    "name": "Champagne brut",
                    "price": 3449.75,
                    "unitOfMeasurement": "unitary",
                    "description": "Champagne brut, ideal para ocasiones especiales",
                    "stock": 30,
                    "imgUrl": "{
                        full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
                        medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
                      }",
                    "brand": "arcor",
                    "category": {
                        "categoryId": "4",
                        "categoryName": "vinoteca",
                        "categoryLabel": "Vinoteca",
                        "featured": true
                    },
                    "promotion": null
                }
            },
            {
                "orderProductId": "b5365590-209a-4aa2-83de-c3e9eb3cc32b",
                "quantity": 2,
                "clientOrder": {
                    "clientOrderId": "4ec23eb3-4943-47f1-a6be-db14fc491150",
                    "createdAt": "2024-10-24T12:33:58.000Z",
                    "isConfirmed": true,
                    "delivery": false,
                    "methodOfPayment": "cash",
                    "status": "unprepared"
                },
                "product": {
                    "productId": "10VinoID",
                    "name": "Vino tinto reserva",
                    "price": 2299.99,
                    "unitOfMeasurement": "unitary",
                    "description": "Vino tinto reserva, con 12 meses de crianza",
                    "stock": 14,
                    "imgUrl": "{
                        full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
                        medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
                      }",
                    "brand": "arcor",
                    "category": {
                        "categoryId": "4",
                        "categoryName": "vinoteca",
                        "categoryLabel": "Vinoteca",
                        "featured": true
                    },
                    "promotion": {
                        "promotionId": "1",
                        "percentage": "0.05"
                    }
                }
            }
        ]
    },
    {
        "date": "2024-10-23T19:29:39.000Z",
        "cart": [
            {
                "orderProductId": "aa04733c-7832-4d32-b56d-e6e188e54be4",
                "quantity": 10,
                "clientOrder": {
                    "clientOrderId": "ca68b269-5627-48ab-81fe-95f888487626",
                    "createdAt": "2024-10-23T19:29:39.000Z",
                    "isConfirmed": false,
                    "delivery": false,
                    "methodOfPayment": "cash",
                    "status": "unprepared"
                },
                "product": {
                    "productId": "21WhiskyID",
                    "name": "Whisky single malt",
                    "price": 4500,
                    "unitOfMeasurement": "lt",
                    "description": "Whisky single malt envejecido en barrica",
                    "stock": 30,
                    "imgUrl": "{
                        full:https://i.postimg.cc/4dZSzH6d/1ArrozID.webp
                        medium:https://i.postimg.cc/GmjC6RXH/1-Arroz-IDTiny.webp
                      }",
                    "brand": "unilever",
                    "category": {
                        "categoryId": "7",
                        "categoryName": "bebidas-con-alcohol ",
                        "categoryLabel": "Bebidas con alcohol",
                        "featured": true
                    },
                    "promotion": null
                }
            }
        ]
    }
]
```

#### **Posibles errores:**

- **500 Internal Server Error:** Error al intentar conectarse a la base de datos
- **404 Not Found:** Usuario no encontrado

</br>

---

</br>
