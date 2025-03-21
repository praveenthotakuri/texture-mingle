
import { Button } from "@/components/ui/button";
import { Plus, Copy, Trash2 } from "lucide-react";
import { TextLayer } from "@/types";
import TextEditor from "@/components/TextEditor";

interface EditorSidebarProps {
  image: string | null;
  textLayers: TextLayer[];
  selectedLayerIndex: number | null;
  onAddTextLayer: () => void;
  onUpdateTextLayer: (index: number, properties: Partial<TextLayer>) => void;
  onDuplicateTextLayer: (index: number) => void;
  onRemoveTextLayer: (index: number) => void;
}

const EditorSidebar = ({
  image,
  textLayers,
  selectedLayerIndex,
  onAddTextLayer,
  onUpdateTextLayer,
  onDuplicateTextLayer,
  onRemoveTextLayer
}: EditorSidebarProps) => {
  const selectedLayer = selectedLayerIndex !== null ? textLayers[selectedLayerIndex] : null;

  return (
    <div className="w-full md:w-2/5 bg-white border-l p-6 overflow-y-auto">
      {image ? (
        <>
          <div className="mb-8">
            <Button 
              variant="secondary" 
              className="w-full" 
              onClick={onAddTextLayer}
            >
              <Plus size={16} className="mr-2" /> Add New Text Set
            </Button>
          </div>

          {textLayers.length > 0 && selectedLayer ? (
            <div className="space-y-6">
              <TextEditor 
                layer={selectedLayer}
                onChange={(props) => onUpdateTextLayer(selectedLayerIndex!, props)}
              />

              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button 
                  variant="outline"
                  onClick={() => onDuplicateTextLayer(selectedLayerIndex!)}
                >
                  <Copy size={16} className="mr-2" /> Duplicate Text Set
                </Button>
                <Button 
                  variant="destructive"
                  onClick={() => onRemoveTextLayer(selectedLayerIndex!)}
                >
                  <Trash2 size={16} className="mr-2" /> Remove Text Set
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">Add a text layer to start editing</p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl font-medium mb-4">Welcome, get started by uploading an image!</p>
          <p className="text-gray-500">Upload an image to begin adding text</p>
        </div>
      )}
    </div>
  );
};

export default EditorSidebar;
