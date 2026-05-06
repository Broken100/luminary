import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; 

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  slug: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, slug, delay = 0 }: ServiceCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
  >
    <Link to={`/servicios/${slug}`} className="block">
      <div className="group p-10 bg-white border border-luminary-border hover:shadow-2xl hover:shadow-luminary-accent/5 transition-all duration-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-luminary-accent transition-all duration-300"></div>
        <div className="w-12 h-12 bg-luminary-bg flex items-center justify-center text-luminary-accent mb-8 group-hover:bg-luminary-accent group-hover:text-white transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-display font-bold text-luminary-dark mb-4 uppercase tracking-tight">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">{description}</p>
        <div className="flex items-center text-[10px] font-bold text-luminary-accent uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform cursor-pointer">
          Saber más <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ServiceCard;
