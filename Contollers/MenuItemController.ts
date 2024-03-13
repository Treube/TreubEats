/* model MenuItem {
  id          Int         @id @default(autoincrement())
  name        String
  description String?
  price       Float
  section     MenuSection @relation(fields: [sectionId], references: [id])
  sectionId   Int
  OrderItem   OrderItem[] */ 
  