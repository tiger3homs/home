import React from 'react';

// Define the props type for the ServicesTab component
interface ServicesTabProps {
  data: any; // The 'services' object or array from translations.en
  path: (string | number)[]; // The base path, e.g., ['services']
  handleChange: (path: (string | number)[], value: string) => void;
  editingPath: string | null;
  setEditingPath: (path: string | null) => void;
  handleDelete: (path: (string | number)[]) => void; // Keep delete for potential items
  renderFields: ( // Pass the original renderFields function
    data: any,
    path: (string | number)[],
    handleChange: (path: (string | number)[], value: string) => void,
    editingPath: string | null,
    setEditingPath: (path: string | null) => void,
    handleAddProject?: () => void, // Not needed here, but keep signature consistent
    handleDelete?: (path: (string | number)[]) => void
  ) => React.ReactNode;
}

const ServicesTab: React.FC<ServicesTabProps> = ({
  data,
  path,
  handleChange,
  editingPath,
  setEditingPath,
  handleDelete,
  renderFields, // Receive renderFields as a prop
}) => {
  // Use the passed renderFields function to render the content for this section
  // The renderFields function already handles objects and arrays appropriately
  return (
    <>
      {renderFields(
        data,
        path,
        handleChange,
        editingPath,
        setEditingPath,
        undefined,
        handleDelete // Pass delete handler
      )}
    </>
  );
};

export default ServicesTab;
