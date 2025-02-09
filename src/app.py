from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Industry data for all districts
data = {
    "Adilabad": {
        "Small": "Cotton Ginning Mills, Rice Mills (Profit:5-10 Lakhs)",
        "Medium": "Bamboo Processing Units, Textiles (Profit:20-30 Lakhs)",
        "Large": "Cement Corporation of India, Paper Mills (Profit-50-80 Lakhs)"
    },
    "Nizamabad": {
        "Small": "Rice Mills, Seed Processing Units (Profit:3-7 Lakhs)",
        "Medium": "Dairy Plants, Agro-processing Units (Profit:15-25 Lakhs)",
        "Large": "Telangana Cooperative Sugars, Indira Industries (Profit:100+ Lakhs)"
    },
    "Karimnagar": {
        "Small": "Stone Polishing Units, Cotton Mills (Profit:5-8 Lakhs)",
        "Medium": "Paper Manufacturing, Fertilizer Units (Profit:15-30 Lakhs)",
        "Large": "NTPC Power Plant, Karimnagar Milk Co-op (Profit:70-150 Lakhs)"
    },
    "Medak": {
        "Small": "Agro-based Units, Welding Shops (Profit:6-10 Lakhs)",
        "Medium": "Solar Panel Manufacturing, Plastic Units (Profit:30-50 Lakhs)",
        "Large": "BHEL, Aurobindo Pharma (Profit:100+ Lakhs)"
    },
    "Hyderabad": {
        "Small": "Bakery Units, Printing Presses (Profit:2-5 Lakhs)",
        "Medium": "Electronics Manufacturing, Pharma Units (Profit:20-50 Lakhs)",
        "Large": "Dr. Reddy’s, Bharat Biotech, Infosys (Profit:100+ Lakhs)"
    },
    "Rangareddy": {
        "Small": "Granite Cutting Units, Agro-based Units (Profit:5-10 Lakhs)",
        "Medium": "Plastic Manufacturing, Packaging Units (Profit:15-30 Lakhs)",
        "Large": "Procter & Gamble, Johnson & Johnson, Hetero Drugs (Profit:100+ Lakhs)"
    },
    "Warangal": {
        "Small": "Handloom Weaving, Jaggery Manufacturing (Profit:5-8 Lakhs)",
        "Medium": "Textile Dyeing Units, Food Processing (Profit:10-20 Lakhs)",
        "Large": "Kakatiya Cement, ITC Paperboards (Profit:50-100 Lakhs)"
    },
    "Khammam": {
        "Small": "Beedi Manufacturing, Brick Kilns (Profit:3-6 Lakhs)",
        "Medium": "Poultry Feed, Small Chemical Plants (Profit:10-15 Lakhs)",
        "Large": "Nava Bharat Ventures, ITC Paperboards (Profit:50-100 Lakhs)"
    },
    "Mahbubnagar": {
        "Small": "Jute Bag Manufacturing, Brick Manufacturing (Profit:3-7 Lakhs)",
        "Medium": "Oil Mills, Agricultural Implements (Profit:15-25 Lakhs)",
        "Large": "Polavaram Hydro Projects, Solar Power Plants (Profit:100+ Lakhs)"
    },
    "Nalgonda": {
        "Small": "Cement-based Units, Salt Refining (Profit:5-10 Lakhs)",
        "Medium": "Cotton Ginning Mills, Detergent Plants (Profit:10-20 Lakhs)",
        "Large": "My Home Cement, Deccan Cement (Profit:50-100 Lakhs)"
    },
    "Sangareddy": {
        "Small": "Welding Units, Garment Stitching (Profit:5-8 Lakhs)",
        "Medium": "Steel Rolling Mills, Ceramics (Profit:15-25 Lakhs)",
        "Large": "BHEL, Aurobindo Pharma (Profit:100+ Lakhs)"
    },
    "Yadadri Bhuvanagiri": {
        "Small": "Agro-machinery, Small Fabrication Units (Profit:5-10 Lakhs)",
        "Medium": "Poultry Feed Units, Leather Processing (Profit:12-20 Lakhs)",
        "Large": "UltraTech Cement, Power Plants (Profit:100+ Lakhs)"
    },
    "Vikarabad": {
        "Small": "Brick Manufacturing, Furniture Units (Profit:3-6 Lakhs)",
        "Medium": "Food Processing Units (Profit:10-15 Lakhs)",
        "Large": "Solar Power Plants, Green Energy Units (Profit:50-100 Lakhs)"
    },
    "Jagtial": {
        "Small": "Mango Pulp Units, Textiles (Profit:4-7 Lakhs)",
        "Medium": "Rice Bran Oil Plants, Agro-based Units (Profit:10-15 Lakhs)",
        "Large": "Textile Parks, Rice Processing Units (Profit:50-100 Lakhs)"
    },
    "Kamareddy": {
        "Small": "Rice Mills, Seed Production (Profit:3-6 Lakhs)",
        "Medium": "Dairy Processing Units, Small Cold Storage (Profit:12-20 Lakhs)",
        "Large": "Sugar Mills, Large-scale Seed Processing Units (Profit:50-100 Lakhs)"
    },
    "Peddapalli": {
        "Small": "Brick Manufacturing, Furniture Units (Profit:5-8 Lakhs)",
        "Medium": "Agro-based Units, Textiles (Profit:15-25 Lakhs)",
        "Large": "NTPC Thermal Power Plant (Profit:100+ Lakhs)"
    },
    "Bhadradri Kothagudem": {
        "Small": "Beedi Units, Coal Mining (Profit:3-6 Lakhs)",
        "Medium": "Paper Manufacturing, Textiles (Profit:10-20 Lakhs)",
        "Large": "Singareni Collieries, ITC Paperboards (Profit:100+ Lakhs)"
    },
    "Siddipet": {
        "Small": "Rice Mills, Seed Production Units (Profit:3-5 Lakhs)",
        "Medium": "Fertilizer Manufacturing, Agro Processing (Profit:15-25 Lakhs)",
        "Large": "Dairy Co-operatives (Profit:50-100 Lakhs)"
    },
    "Mancherial": {
        "Small": "Brick Kilns, Agro-machinery (Profit:3-6 Lakhs)",
        "Medium": "Fertilizer Units, Mining Equipment (Profit:12-20 Lakhs)",
        "Large": "Singareni Collieries (Profit:100+ Lakhs)"
    },
    "Nirmal": {
        "Small": "Handicrafts, Bamboo Crafts (Profit:2-5 Lakhs)",
        "Medium": "Rice Mills, Textiles (Profit:5-10 Lakhs)",
        "Large": "Cement Factories, Paper Units (Profit:50-100 Lakhs)"
    },
    "Mahabubabad": {
        "Small": "Jaggery Units, Rice Mills (Profit:4-7 Lakhs)",
        "Medium": "Food Processing Units (Profit:10-20 Lakhs)",
        "Large": "Granite Factories (Profit:50-100 Lakhs)"
    },
    "Jangaon": {
        "Small": "Garment Manufacturing, Rice Mills (Profit:3-5 Lakhs)",
        "Medium": "Detergent Units (Profit:10-15 Lakhs)",
        "Large": "Agro Processing Plants (Profit:50-100 Lakhs)"
    },
    "Mulugu": {
        "Small": "Handicrafts, Small Woodworking Units (Profit:2-5 Lakhs)",
        "Medium": "Bamboo Processing (Profit:10-15 Lakhs)",
        "Large": "Cement Units (Profit:50-100 Lakhs)"
    },
    "Narayanpet": {
        "Small": "Handlooms, Jute Products (Profit:5-10 Lakhs)",
        "Medium": "Agro-processing Units (Profit:10-15 Lakhs)",
        "Large": "Textile Parks (Profit:50-100 Lakhs)"
    },
    "Rajanna Sircilla": {
        "Small": "Handloom Weaving, Textiles (Profit:4-8 Lakhs)",
        "Medium": "Textile Parks (Profit:15-30 Lakhs)",
        "Large": "Apparel Manufacturing (Profit:50-100 Lakhs)"
    },
    "Medchal-Malkajgiri": {
        "Small": "Printing Presses, Bakery Units (Profit:2-5 Lakhs)",
        "Medium": "Electronics, Packaging Units (Profit:20-50 Lakhs)",
        "Large": "Pharma Parks, IT Hubs (Profit:100+ Lakhs)"
    },
    "Jayashankar Bhupalapally": {
        "Small": "Handicrafts, Wood-based Units (Profit:5-8 Lakhs)",
        "Medium": "Small Chemical Units (Profit:10-15 Lakhs)",
        "Large": "Singareni Collieries (Profit:100+ Lakhs)"
    },
    "Wanaparthy": {
        "Small": "Rice Mills, Brick Units (Profit:3-6 Lakhs)",
        "Medium": "Agro Machinery (Profit:12-20 Lakhs)",
        "Large": "Dairy Plants (Profit:50-100 Lakhs)"
    },
    "Jogulamba Gadwal": {
        "Small": "Cotton Ginning, Jute Products (Profit:5-10 Lakhs)",
        "Medium": "Food Processing (Profit:12-25 Lakhs)",
        "Large": "Solar Power Plants (Profit:100+ Lakhs)"
    },
    "Nagarkurnool": {
        "Small": "Brick Kilns, Small Food Processing (Profit:3-6 Lakhs)",
        "Medium": "Agro Machinery, Textiles (Profit:12-20 Lakhs)",
        "Large": "Solar Power Projects (Profit:100+ Lakhs)"
    },
    "Suryapet": {
        "Small": "Stone Cutting Units, Salt Processing (Profit:3-5 Lakhs)",
        "Medium": "Agro Processing, Fertilizers (Profit:15-25 Lakhs)",
        "Large": "Deccan Cements (Profit:100+ Lakhs)"
    },
    "Asifabad": {
        "Small": "Bamboo-based Units, Handicrafts (Profit:2-5 Lakhs)",
        "Medium": "Textiles, Rice Mills (Profit:5-10 Lakhs)",
        "Large": "Cement Manufacturing (Profit:50-100 Lakhs)"
    }
}



# Data as provided previously
industry_count = {
    "Adilabad": {"Small": 200, "Medium": 50, "Large": 10},
    "Nizamabad": {"Small": 300, "Medium": 70, "Large": 20},
    "Karimnagar": {"Small": 400, "Medium": 80, "Large": 25},
    "Medak": {"Small": 500, "Medium": 100, "Large": 30},
    "Hyderabad": {"Small": 800, "Medium": 200, "Large": 100},
    "Rangareddy": {"Small": 700, "Medium": 150, "Large": 80},
    "Warangal": {"Small": 600, "Medium": 120, "Large": 50},
    "Khammam": {"Small": 400, "Medium": 70, "Large": 25},
    "Mahbubnagar": {"Small": 300, "Medium": 60, "Large": 20},
    "Nalgonda": {"Small": 350, "Medium": 80, "Large": 30},
    "Sangareddy": {"Small": 450, "Medium": 90, "Large": 40},
    "Yadadri Bhuvanagiri": {"Small": 200, "Medium": 40, "Large": 15},
    "Vikarabad": {"Small": 150, "Medium": 30, "Large": 10},
    "Jagtial": {"Small": 250, "Medium": 50, "Large": 10},
    "Kamareddy": {"Small": 200, "Medium": 50, "Large": 15},
    "Peddapalli": {"Small": 300, "Medium": 60, "Large": 20},
    "Bhadradri Kothagudem": {"Small": 400, "Medium": 70, "Large": 25},
    "Siddipet": {"Small": 250, "Medium": 50, "Large": 15},
    "Mancherial": {"Small": 300, "Medium": 60, "Large": 20},
    "Nirmal": {"Small": 200, "Medium": 40, "Large": 10},
    "Mahabubabad": {"Small": 150, "Medium": 30, "Large": 10},
    "Jangaon": {"Small": 150, "Medium": 40, "Large": 10},
    "Mulugu": {"Small": 100, "Medium": 20, "Large": 5},
    "Narayanpet": {"Small": 120, "Medium": 30, "Large": 10},
    "Rajanna Sircilla": {"Small": 200, "Medium": 50, "Large": 20},
    "Medchal-Malkajgiri": {"Small": 500, "Medium": 120, "Large": 60},
    "Jayashankar Bhupalapally": {"Small": 150, "Medium": 30, "Large": 10},
    "Wanaparthy": {"Small": 150, "Medium": 30, "Large": 10},
    "Jogulamba Gadwal": {"Small": 120, "Medium": 30, "Large": 10},
    "Nagarkurnool": {"Small": 200, "Medium": 40, "Large": 15},
    "Suryapet": {"Small": 300, "Medium": 60, "Large": 20},
    "Asifabad": {"Small": 150, "Medium": 30, "Large": 10}
}


@app.route('/')
def index():
    return render_template('index.html', districts=industry_count.keys())

@app.route('/recommend')
def recommend():
    district = request.args.get('district')
    scale = request.args.get('scale')
    if not district or not scale:
        return jsonify({"recommendations": "Invalid input."})
    # Generate the chart for the selected district
    industry_data = industry_count.get(district, {})
    small_count = industry_data.get("Small", 0)
    medium_count = industry_data.get("Medium", 0)
    large_count = industry_data.get("Large", 0)

    # Create the bar chart
    import matplotlib.pyplot as plt  # For plotting charts
    import io  # For handling in-memory byte streams
    import base64
    fig, ax = plt.subplots()
    ax.bar(['Small', 'Medium', 'Large'], [small_count, medium_count, large_count], color=['blue', 'orange', 'green'])
    ax.set_xlabel('Industry Scale')
    ax.set_ylabel('Number of Industries')
    ax.set_title(f'Industry Distribution for {district}')

    # Save the plot to a BytesIO object and convert to base64
    img = io.BytesIO()
    fig.savefig(img, format='png')
    img.seek(0)
    img_base64 = base64.b64encode(img.getvalue()).decode('utf-8')

    # Get the recommendations based on the scale
    recommendations = data.get(district, {}).get(scale, "No data available.")
    
    return jsonify({
        "recommendations": recommendations,
        "image": img_base64
    })

    recommendations = data.get(district, {}).get(scale, "No data available.")
    return jsonify({"recommendations": recommendations})




if __name__ == '__main__':
    app.run(debug=True)
