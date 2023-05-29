import { useEffect, useState } from "react";
import categoryData from "api/categories.json";
import Category from "components/ui/Category";


export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoryData);
    }, []);
    return (
        <div className="bg-white py-6">
            <div className="container mx-auto">
                <h3 className="text-sm font-semibold mb-2">Kategoriler</h3>
                <div className="flex">
                    {categories && categories.map((category, index) => <Category key={index} category={category} />)}
                </div>
            </div>
        </div>
    );
}
