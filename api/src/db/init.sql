CREATE DATABASE IF NOT EXISTS kramer;

USE kramer;

INSERT INTO
  `promotion` (`promotionId`, `percentage`)
VALUES
  ('1', 0.05),
  ('2', 0.1),
  ('3', 0.15);

INSERT INTO
  `user` (`userId`, `name`, `email`, `password`, `role`)
VALUES
  (
    '1FrancoID',
    'Franco',
    'user1@example.com',
    'hashed_password1',
    'client'
  ),
  (
    '2TomasID',
    'Tomás',
    'user2@example.com',
    'hashed_password2',
    'client'
  ),
  (
    '3LunarID',
    'Lucas',
    'user3@example.com',
    'hashed_password3',
    'client'
  ),
  (
    '4FernandoID',
    'Fernando',
    'user4@example.com',
    'hashed_password4',
    'client'
  );

INSERT INTO
  `category` (
    `categoryId`,
    `categoryName`,
    `categorylabel`,
    `featured`
  )
VALUES
  ('1', 'almacen', 'Almacén', TRUE),
  ('2', 'congelados', 'Congelados', FALSE),
  ('3', 'libreria', 'Librería', FALSE),
  ('4', 'vinoteca', 'Vinoteca', TRUE),
  ('5', 'limpieza', 'Limpieza', FALSE),
  (
    '6',
    'bebidas-sin-alcohol',
    'Bebidas sin alcohol',
    TRUE
  ),
  (
    '7',
    'bebidas-con-alcohol',
    'Bebidas con alcohol',
    FALSE
  ),
  ('8', 'variados', 'Variados', FALSE);

INSERT INTO
  `product` (
    `productId`,
    `name`,
    `price`,
    `unitOfMeasurement`,
    `description`,
    `stock`,
    `imgUrl`,
    `category`,
    `promotion`,
    `brand`
  )
VALUES
  (
    '10VinoID',
    'Vino tinto reserva',
    2299.99,
    'unitary',
    'Vino tinto reserva, con 12 meses de crianza',
    14,
    'https://i.postimg.cc/FR11y2cj/10VinoID.webp',
    '4',
    '1',
    'arcor'
  ),
  (
    '11ChampagneID',
    'Champagne brut',
    3449.75,
    'unitary',
    'Champagne brut, ideal para ocasiones especiales',
    30,
    'https://i.postimg.cc/fy9LFm8y/11-Champagne-ID.webp',
    '4',
    NULL,
    'arcor'
  ),
  (
    '12LicorID',
    'Licor de café',
    1900,
    'lt',
    'Delicioso licor de café con notas a vainilla',
    50,
    'https://i.postimg.cc/qRYqjjXW/12-Licor-ID.webp',
    '4',
    '3',
    'arcor'
  ),
  (
    '13DetergenteID',
    'Detergente en polvo',
    1500,
    'kg',
    'Detergente en polvo de alta eficacia',
    100,
    'https://i.postimg.cc/z3YB1vQj/13-Detergente-ID.webp',
    '5',
    NULL,
    'arcor'
  ),
  (
    '14SuavizanteID',
    'Suavizante de ropa',
    2400,
    'lt',
    'Suavizante de ropa concentrado, aroma a flores',
    80,
    'https://i.postimg.cc/V6D70bw7/14-Suavizante-ID.webp',
    '5',
    '2',
    'arcor'
  ),
  (
    '15LavavajillasID',
    'Lavavajillas líquido',
    3300,
    'lt',
    'Lavavajillas líquido de enjuague rápido',
    90,
    'https://i.postimg.cc/xC0xd3wJ/15-Lavavajillas-ID.webp',
    '5',
    NULL,
    'quilmes'
  ),
  (
    '16AguaID',
    'Agua mineral',
    900,
    'lt',
    'Agua mineral natural, sin gas',
    120,
    'https://i.postimg.cc/k5NY9ppP/16AguaID.webp',
    '6',
    '1',
    'quilmes'
  ),
  (
    '17JugoID',
    'Jugo de naranja',
    750,
    'lt',
    'Jugo de naranja exprimido, sin azúcar',
    100,
    'https://i.postimg.cc/LsFQcpvV/17JugoID.webp',
    '6',
    NULL,
    'quilmes'
  ),
  (
    '18RefrescoID',
    'Refresco de cola',
    2400,
    'lt',
    'Refresco de cola con edulcorantes naturales',
    80,
    'https://i.postimg.cc/qv3ZDRcR/18-Refresco-ID.webp',
    '6',
    '3',
    'quilmes'
  ),
  (
    '19CervezaID',
    'Cerveza artesanal',
    4200,
    'lt',
    'Cerveza artesanal de trigo, con tonos cítricos',
    60,
    'https://i.postimg.cc/SN5vG8M3/19-Cerveza-ID.webp',
    '7',
    NULL,
    'quilmes'
  ),
  (
    '1ArrozID',
    'Arroz integral',
    800,
    'kg',
    'Arroz integral de calidad premium',
    100,
    'https://i.postimg.cc/vHDK9Xc5/1ArrozID.webp',
    '1',
    NULL,
    'unilever'
  ),
  (
    '20VinoBlancoID',
    'Vino blanco seco',
    2500,
    'lt',
    'Vino blanco seco, con notas de cítricos',
    50,
    'https://i.postimg.cc/2j0JVg8z/20-Vino-Blanco-ID.webp',
    '7',
    '2',
    'unilever'
  ),
  (
    '21WhiskyID',
    'Whisky single malt',
    4500,
    'lt',
    'Whisky single malt envejecido en barrica',
    30,
    'https://i.postimg.cc/WzYfCqfD/21-Whisky-ID.webp',
    '7',
    NULL,
    'unilever'
  ),
  (
    '22MochilaID',
    'Mochila de viaje',
    23400,
    'unitary',
    'Mochila de viaje impermeable y con múltiples bolsillos',
    70,
    'https://i.postimg.cc/vTZN0tXF/22-Mochila-ID.webp',
    '8',
    '1',
    'unilever'
  ),
  (
    '2HarinaID',
    'Harina de trigo',
    850,
    'kg',
    'Harina de trigo de alta pureza',
    80,
    'https://i.postimg.cc/fb8J0w3z/2-Harina-ID.webp',
    '1',
    '2',
    'molinos-cañuelas'
  ),
  (
    '3AzucarID',
    'Azúcar moreno',
    900.50,
    'kg',
    'Azúcar moreno orgánico sin refinar',
    90,
    'https://i.postimg.cc/ydPGhbmy/3-Azucar-ID.webp',
    '1',
    NULL,
    'molinos-cañuelas'
  ),
  (
    '4SalmónID',
    'Filete de salmón',
    13000,
    'kg',
    'Filete de salmón fresco y de primera calidad',
    50,
    'https://i.postimg.cc/9MVS7h7f/4-Salmon-ID.webp',
    '2',
    '1',
    'molinos-cañuelas'
  ),
  (
    '5PolloID',
    'Pollo congelado',
    3460,
    'kg',
    'Pollo entero congelado, sin aditivos',
    80,
    'https://i.postimg.cc/Nj9WhbtQ/5PolloID.webp',
    '2',
    NULL,
    'molinos-cañuelas'
  ),
  (
    '6HeladoID',
    'Helado de vainilla',
    2000,
    'lt',
    'Delicioso helado de vainilla artesanal',
    60,
    'https://i.postimg.cc/13kby6Rw/6-Helado-ID.webp',
    '2',
    '3',
    'mondelez'
  ),
  (
    '7CuadernoID',
    'Cuaderno universitario',
    3200,
    'unitary',
    'Cuaderno universitario de 100 hojas rayadas',
    120,
    'https://i.postimg.cc/R0wyhFq8/7-Cuaderno-ID.webp',
    '3',
    NULL,
    'mondelez'
  ),
  (
    '8BoligrafoID',
    'Bolígrafo retráctil',
    255,
    'unitary',
    'Bolígrafo retráctil de tinta azul',
    150,
    'https://i.postimg.cc/4NFrFqr8/8-Boligrafo-ID.webp',
    '3',
    '2',
    'mondelez'
  ),
  (
    '9LibroID',
    'Libro de novela',
    1300,
    'unitary',
    'Libro de novela contemporánea, best seller',
    80,
    'https://i.postimg.cc/c4Jph05g/9LibroID.webp',
    '3',
    NULL,
    'mondelez'
  );