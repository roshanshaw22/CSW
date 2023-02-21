import { defineStore } from "pinia";

export const csw = defineStore("carServiceWale", {
    state: () => ({
        services: {
            scheduleService: [
                {
                    id: 1,
                    image: "http://localhost:5173/src/components/images/about.jpg",
                    name: "Regular Service",
                    price: "13,999",
                    old_price: "14,999",
                    discount: "12%",

                    reviews: "400 Ratings & 133 Reviews",
                    description: [
                        { id: 1, desc: " Coolant Top Up (Upto 200ml)" },
                        { id: 2, desc: " Windshield Water Top Up)" },
                        { id: 3, desc: " Engine Oil Replacement" },
                    ],
                },

                {
                    id: 2,
                    image: "http://localhost:5173/src/components/images/about.jpg",
                    name: "Standard Service",
                    price: "14,999",
                    old_price: "15,999",
                    discount: "15%",

                    reviews: "750 Ratings & 13 Reviews",
                    description: [
                        { id: 1, desc: " Air Filter Replacement" },
                        { id: 2, desc: " Engine Oil Replacement" },
                        { id: 3, desc: " Front & Rear Brakes Check Up" },
                    ],
                },
                {
                    id: 3,
                    image: "http://localhost:5173/src/components/images/about.jpg",
                    name: "Complete Service",
                    price: "15,999",
                    old_price: "16,999",
                    discount: "23%",
                    reviews: "256 Ratings & 123 Reviews",
                    description: [
                        { id: 1, desc: " AC filter cleaning" },
                        { id: 2, desc: " Windshield Water Top Up" },
                        { id: 3, desc: " Front & Rear Brakes Check Up" },
                    ],
                },
            ],
            dentingPainting: [
                {
                    id: 1,
                    image: "http://localhost:5173/src/components/images/about.jpg",
                    name: "Front Bonnet Paint",
                    price: "3,891",
                    old_price: "5,090",
                    discount: "20%",
                    reviews: "350 Ratings & 133 Reviews",
                    description: [
                        { id: 1, desc: " 4 Layers Painting" },
                        { id: 2, desc: " Rubbing & Buffing" },
                        { id: 3, desc: " Body Coat" },
                    ],
                },

                {
                    id: 2,
                    image: "http://localhost:5173/src/components/images/about.jpg",
                    name: "Left Quarter Panel Paint",
                    price: "4,191",
                    old_price: "5,999",
                    discount: "13%",

                    reviews: "750 Ratings & 13 Reviews",
                    description: [
                        { id: 1, desc: " Air Filter Replacement" },
                        { id: 2, desc: " Engine Oil Replacement" },
                        { id: 3, desc: " Front & Rear Brakes Check Up" },
                    ],
                },
            ],
        },
        carObj: {
            id: 0,
            name: "",
            logo: "",
            brand: "",
            image: "",
            type: "",
        },
        cartItem: [],
    }),

    getters: {
        cartCount(state) {
            return state.cartItem.length;
        },

        cartTotal(state){
            let total = 0;
            for(let item in state.cartItem){
                let price = state.cartItem[item].price.replace(/\,/g,'');
                total = parseFloat(total + parseInt(price,10));
            }
            console.log(total);
            return total;
        }
    },

    actions: {
        addToCart(item) {
            this.cartItem.push(item);
        },
    },
});
