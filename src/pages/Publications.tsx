import { motion } from "framer-motion";
import { useState } from "react";
import { PublicationCard } from "@/components/PublicationCard";
import { publications } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const [filter, setFilter] = useState<"all" | "journal" | "conference" | "workshop">("all");

  const filteredPublications = filter === "all" 
    ? publications 
    : publications.filter(pub => pub.type === filter);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" data-scroll-section>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Peer-reviewed research papers, conference proceedings, and scholarly contributions.
          </p>

          <div className="flex flex-wrap gap-2">
            {(["all", "journal", "conference", "workshop"] as const).map((type) => (
              <Button
                key={type}
                variant={filter === type ? "default" : "outline"}
                onClick={() => setFilter(type)}
                className="capitalize"
              >
                {type}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          {filteredPublications.map((publication, index) => (
            <PublicationCard key={publication.id} publication={publication} index={index} />
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No publications found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Publications;
