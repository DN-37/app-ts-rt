import React from "react";
import { FaPlus } from "react-icons/fa";
import { userPokemonsType } from "../utils/types";
function CompareContainer({
    pokemon = undefined,
    isEmpty = false,
}: {
    pokemon?: userPokemonsType;
    isEmpty?: boolean;
}) {
    return (
        <div className="compare-container">
            {isEmpty && (
                <div className="empty">
                    <button>
                        <FaPlus />
                    </button>
                    <h3>Add Pokemon for Comparison</h3>
                </div>
            )}
        </div>
    );
}

export default CompareContainer;