document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.getElementById("filter-button");
    const priceRange = document.getElementById("price-filter");

    filterButton.addEventListener("click", function () {
        const selectedLocation = document.getElementById("location-filter").value;
        const selectedType = document.getElementById("type-filter").value;
        const selectedPriceRange = priceRange.value;
        const selectedPlotsize = document.getElementById("plot-size-filter").value;

        console.log("Selected Filters:", { selectedLocation, selectedType, selectedPriceRange, selectedPlotsize });

        const properties = document.querySelectorAll(".property-item");

        properties.forEach(property => {
            const propertyLocation = property.getAttribute("data-location") || "";
            const propertyType = property.getAttribute("data-type") || "";
            const propertyPrice = parseFloat(property.getAttribute("data-price")) || 0;
            const propertyPlotsize = property.getAttribute("data-plot-size") || "";

            console.log("Checking Property:", { propertyLocation, propertyType, propertyPrice, propertyPlotsize });

            let isVisible = true;

            // Apply location filter
            if (selectedLocation && selectedLocation !== propertyLocation) {
                console.log(`Location Mismatch: ${propertyLocation} does not match ${selectedLocation}`);
                isVisible = false;
            }

            // Apply property type filter
            if (selectedType && selectedType !== propertyType) {
                console.log(`Type Mismatch: ${propertyType} does not match ${selectedType}`);
                isVisible = false;
            }

            // Apply price range filter
            if (selectedPriceRange && selectedPriceRange !== "null") {
                const [minPrice, maxPrice] = selectedPriceRange.split(" - ").map(p => parseFloat(p.replace(/[^0-9.]/g, '')));
                console.log(`Price Range: ${minPrice} - ${maxPrice}, Property Price: ${propertyPrice}`);
                if (!(propertyPrice >= minPrice && propertyPrice <= maxPrice)) {
                    console.log(`Price Mismatch: ${propertyPrice} is not in range ${minPrice} - ${maxPrice}`);
                    isVisible = false;
                }
            }

            // Apply plot size filter (ignore empty values)
            if (selectedPlotsize && propertyPlotsize && selectedPlotsize !== propertyPlotsize) {
                console.log(`Plot Size Mismatch: ${propertyPlotsize} does not match ${selectedPlotsize}`);
                isVisible = false;
            }

            console.log(`Final visibility: ${isVisible}`);

            property.style.display = isVisible ? "block" : "none";
        });
    });
});
