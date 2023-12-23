document.addEventListener('DOMContentLoaded', function() {
    loadRewards();

    function loadRewards() {
        const rewards = [
            { name: 'Café Delight', reward: '10% off Coffee', image: 'placeholder-image1.jpg' },
            { name: 'Tech Gadgets', reward: '15% off Accessories', image: 'placeholder-image2.jpg' },
            { name: 'Book Haven', reward: 'Buy 1 Get 1 Free Book', image: 'placeholder-image3.jpg' },
            { name: 'Fashion Hub', reward: '20% off Apparel', image: 'placeholder-image4.jpg' },
            { name: 'Gourmet Bistro', reward: 'Free Appetizer', image: 'placeholder-image5.jpg' },
            { name: 'Health & Wellness', reward: 'Free Gym Session', image: 'placeholder-image6.jpg' },
            { name: 'Cinema City', reward: '2 for 1 Movie Tickets', image: 'placeholder-image7.jpg' },
            { name: 'Auto Care', reward: '30% off Car Wash', image: 'placeholder-image8.jpg' },
            { name: 'Travel Tours', reward: 'Discount on Travel Booking', image: 'placeholder-image9.jpg' },
            { name: 'Music Mania', reward: 'Free Concert Ticket', image: 'placeholder-image10.jpg' },
            { name: 'Artisan Bakery', reward: 'Free Pastry with Purchase', image: 'placeholder-image11.jpg' },
            { name: 'Pet Care', reward: 'Discount on Pet Supplies', image: 'placeholder-image12.jpg' },
            { name: 'Flower Shop', reward: '15% off Bouquets', image: 'placeholder-image13.jpg' },
            { name: 'Gadget World', reward: 'Exclusive Tech Deals', image: 'placeholder-image14.jpg' },
            { name: 'Beauty Salon', reward: 'Free Makeover Session', image: 'placeholder-image15.jpg' },
            { name: 'Local Brewery', reward: 'Free Craft Beer Tasting', image: 'placeholder-image16.jpg' },
            { name: 'Outdoor Gear', reward: 'Discount on Camping Gear', image: 'placeholder-image17.jpg' },
            { name: 'Yoga Studio', reward: 'Free Yoga Class', image: 'placeholder-image18.jpg' },
            { name: 'Organic Market', reward: 'Discount on Organic Products', image: 'placeholder-image19.jpg' },
            { name: 'Game Zone', reward: 'Free Arcade Tokens', image: 'placeholder-image20.jpg' }
        ];
        
        const rewardsSection = document.getElementById('rewardsSection');
        rewards.forEach(reward => {
            const pointsNeeded = Math.floor(Math.random() * 901) + 100;
            const rewardDiv = document.createElement('div');
            rewardDiv.classList.add('reward');
            rewardDiv.innerHTML = `
                <h3>${reward.name}</h3>
                <p>${reward.reward} - ${pointsNeeded} Points</p>
                <img src="${reward.image}" alt="${reward.name}" style="width:120px;height:120px;">
                <button class="btn">Redeem Offer</button>`;
            rewardsSection.appendChild(rewardDiv);
        });
    }
});



