"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "hotels",
      [
        {
          name: "Cozrum Homes - Sonata Residence",
          star: 4,
          map: "Đường Nguyễn Thị Thập, Phường Tân Phú, Quận 7, TP.HCM | Cách trung tâm thành phố 5.2 km",
          TypeHotel: "Hotel",
          payment: "online",
          cost: 1015000,
          ownerId: 1,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Holiday Inn & Suites Saigon Airport",
          star: 5,
          map: "Đường Cộng Hòa, Quận Tân Bình, TP.HCM | Cách trung tâm thành phố 4.7 km",
          TypeHotel: "Hotel",
          payment: "online",
          cost: 2324235,
          ownerId: 2,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "LA VELA SAIGON HOTEL ",
          star: 5,
          map: "Đường Nam Kỳ Khởi Nghĩa, Quận 3, TP.HCM | Cách trung tâm thành phố 1.8 km",
          payment: "online",
          TypeHotel: "Hotel",
          cost: 3324235,
          ownerId: 3,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Sakura Hostel Saigon",
          star: 4,
          map: "Đường Nguyễn Trãi, Phường Bến Thành, Quận 1, TP.HCM | Cách trung tâm thành phố 1.0 km",
          TypeHotel: "Hotel",
          payment: "online",
          cost: 300000,
          ownerId: 4,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "LANGUAGE EXCHANGE HOTEL 3",
          star: 3,
          map: "Đường Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, TP.HCM | Cách trung tâm thành phố 1.5 km",
          TypeHotel: "Hotel",
          payment: "online",
          cost: 324235,
          ownerId: 5,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Ehome Saigon ",
          star: 2,
          map: "Đường Phạm Ngũ Lão, Quận 1, TP.HCM | Cách trung tâm thành phố 1.1 km",
          payment: "online",
          TypeHotel: "homestay",
          cost: 224235,
          ownerId: 6,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "SEA QUEEN HOTEL",
          star: 3,
          map: "157 Lê Quang Đạo, Bắc Mỹ Phú, Quận Ngũ Hành Sơn, Đà Nẵng",
          TypeHotel: "Hotel",
          payment: "online",
          cost: 424901,
          ownerId: 7,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Adina Hotel",
          star: 3,
          map: "Đường Phạm Văn Đồng, An Hải Bắc, Sơn Trà, Đà Nẵng",
          payment: "online",
          TypeHotel: "resort",
          cost: 215195,
          ownerId: 8,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Grand Ocean Luxury Boutique",
          star: 4,
          map: "Phan Liêm, Bãi biển Mỹ Khê, Ngũ Hành Sơn, Đà Nẵng",
          TypeHotel: "resort",
          payment: "online",
          cost: 504143,
          ownerId: 9,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Hoang Sa Hotel",
          star: 3,
          map: "Đường Đình Nghệ, An Hải Bắc, Sơn Trà, Đà Nẵng",
          TypeHotel: "Hotel",
          payment: "online",
          cost: 255000,
          ownerId: 10,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Sheration Hanoi Hotel",
          star: 5,
          map: "K5 Nghi Tàm, 11 Đường Xuân Diệu, Tây Hồ, Hà Nội",
          TypeHotel: "Hotel",
          payment: "online",
          cost: 4500000,
          ownerId: 11,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Ravatel Luxury Hotel Bac Giang",
          star: 4,
          map: "Số 1, Hùng Vương 1, Lê Lợi, Bắc Giang",
          TypeHotel: "homestay",
          payment: "online",
          cost: 612258,
          ownerId: 12,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "InterContinental Hanoi Landmark72",
          star: 4,
          map: "Keangnam Hanoi Landmark Tower, Lô E6, Cầu Giấy, Mễ Trì, Từ Liêm, Nam Từ Liêm, Hà Nội",
          TypeHotel: "Hotel",
          payment: "online",
          cost: 3374189,
          ownerId: 13,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "JW Marriott Hotel Hanoi",
          star: 5,
          payment: "online",
          map: "8 Đỗ Đức Dục, P.Mễ Trì, Q., Nam Từ Liêm, Hà Nội",
          TypeHotel: "Hotel",
          cost: 4900000,
          ownerId: 14,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "New World Phu Quoc Resort",
          star: 5,
          map: "Bãi Khem, An Thới, Đảo Phú Quốc, Kiên Giang",
          TypeHotel: "resort",
          payment: "online",
          cost: 6682230,
          ownerId: 15,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "InterContinental Phu Quoc Long Beach Resort",
          star: 5,
          map: "Bãi Trường, Xã, Dương Tơ, Đảo Phú Quốc, Kiên Giang",
          TypeHotel: "resort",
          payment: "online",
          cost: 5498680,
          ownerId: 16,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Vinpearl Resort & Spa Phú Quốc",
          star: 5,
          map: "Bai Dai, Gach Dau, Gành Dầu, Đảo Phú Quốc, Kiên Giang",
          TypeHotel: "resort",
          payment: "offline",
          cost: 2103174,
          ownerId: 17,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Senna Hue Hotel",
          star: 5,
          payment: "offline",
          map: "7 Nguyễn Tri Phương, Huế, Tỉnh Thừa Thiên-Huế",
          TypeHotel: "Hotel",
          cost: 2195223,
          ownerId: 18,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Khách sạn Melia Vipearl Huế",
          star: 5,
          payment: "offline",
          map: "50A Hùng Vương, Huế, Tỉnh Thừa Thiên-Huế",
          TypeHotel: "Hotel",
          cost: 2630974,
          ownerId: 19,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Premier Pearl Hotel Vung Tau",
          star: 4,
          map: "69 Thùy Vân, Vũng Tàu, Bà Rịa-Vũng Tàu",
          TypeHotel: "Hotel",
          payment: "offline",
          cost: 2468013,
          ownerId: 20,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Xoài Homestay Vũng Tàu - The Sóng Apartment",
          star: 4,
          map: "28 Đường Thi Sách, Vũng Tàu, Bà Rịa-Vũng Tàu",
          TypeHotel: "homestay",
          payment: "offline",
          cost: 1543843,
          ownerId: 21,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "La Villa Da Lat",
          star: 4,
          map: "C21 KQH nghiên cứu đường Hùng Vương, Phường 11, Khu Chi Lăng, Đà Lạt, Lâm Đồng",
          TypeHotel: "resort",
          payment: "offline",
          cost: 16323628,
          ownerId: 22,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "California Hotel",
          star: 3,
          map: "A28 Nguyễn Hữu Cảnh, phường 8, Thành phố, Phường 8, Đà Lạt, Lâm Đồng",
          TypeHotel: "Hotel",
          payment: "offline",
          cost: 1632164,
          ownerId: 23,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Le Macaron Boutique Hotel",
          star: 3,
          map: "52 Trương Công Định, Phường 6, Đà Lạt, Lâm Đồng",
          TypeHotel: "Hotel",
          payment: "offline",
          cost: 1147637,
          ownerId: 24,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Khách sạn Dalat Palace Heritage",
          star: 5,
          map: "02 Trần Phú, Phường 3, Đà Lạt, Lâm Đồng",
          TypeHotel: "Hotel",
          payment: "offline",
          cost: 5325334,
          ownerId: 25,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Alma Resort Cam Ranh",
          star: 5,
          map: "Bắc Bán đảo Cam Ranh, Xã Cam Hải Đông, Cam Lâm, Khánh Hòa",
          TypeHotel: "Resort",
          payment: "offline",
          cost: 3797382,
          ownerId: 26,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Vinpearl Beachfront Nha Trang",
          star: 5,
          map: "78-80 Trần Phú, P., Lộc Thọ, Nha Trang, Khánh Hòa",
          TypeHotel: "service apartment",
          payment: "offline",
          cost: 1631393,
          ownerId: 27,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "InterContinental Nha Trang, an IHG Hotel",
          star: 5,
          payment: "offline",
          map: "32-34 Trần Phú, Lộc Thọ, Nha Trang, Khánh Hòa",
          TypeHotel: "service apartment",
          cost: 4349044,
          ownerId: 28,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Du thuyền Scarlet Pearl Cruises",
          star: 5,
          map: "Cảng tàu khách quốc tế Hạ Long, Hạ Long, Quảng Ninh",
          TypeHotel: "service apartment",
          payment: "offline",
          cost: 15256262,
          ownerId: 29,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Muong Thanh Luxury Quang Ninh Hotel",
          star: 5,
          map: "Đường Hạ Long, P.Bãi Cháy, Hạ Long, Quảng Ninh",
          TypeHotel: "Hotel",
          payment: "offline",
          cost: 1558709,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
        {
          name: "Oakwood Hạ Long",
          star: 4,
          map: "No 09 Hạ Long, Quảng Ninh",
          TypeHotel: "Hotel",
          payment: "offline",
          cost: 3675617,
          createdAt: "2024-04-01 04:26:18",
          updatedAt: "2024-04-01 04:26:18",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("hotels", null, {});
  },
};
