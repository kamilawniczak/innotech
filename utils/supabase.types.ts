export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string;
          filters: Json | null;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          filters?: Json | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          filters?: Json | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      news: {
        Row: {
          content: Json | null;
          created_at: string;
          description: string;
          id: number;
          imageUrl: string;
          title: string;
        };
        Insert: {
          content?: Json | null;
          created_at?: string;
          description: string;
          id?: number;
          imageUrl: string;
          title: string;
        };
        Update: {
          content?: Json | null;
          created_at?: string;
          description?: string;
          id?: number;
          imageUrl?: string;
          title?: string;
        };
        Relationships: [];
      };
      opinions: {
        Row: {
          created_at: string;
          description: string | null;
          email: string;
          id: number;
          product_id: number | null;
          rating: number;
          username: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          email?: string;
          id?: number;
          product_id?: number | null;
          rating: number;
          username?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          email?: string;
          id?: number;
          product_id?: number | null;
          rating?: number;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "opinions_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "deal_of_the_day";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "opinions_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "opinions_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "random_products";
            referencedColumns: ["id"];
          }
        ];
      };
      products: {
        Row: {
          category: number | null;
          created_at: string;
          description: Json | null;
          id: number;
          images: string[];
          manufacturer: string;
          name: string;
          price: number;
          quantity_sold: number;
          rating: number;
          sale_price: number | null;
          specification: Json | null;
        };
        Insert: {
          category?: number | null;
          created_at?: string;
          description?: Json | null;
          id?: number;
          images: string[];
          manufacturer?: string;
          name: string;
          price: number;
          quantity_sold?: number;
          rating?: number;
          sale_price?: number | null;
          specification?: Json | null;
        };
        Update: {
          category?: number | null;
          created_at?: string;
          description?: Json | null;
          id?: number;
          images?: string[];
          manufacturer?: string;
          name?: string;
          price?: number;
          quantity_sold?: number;
          rating?: number;
          sale_price?: number | null;
          specification?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "products_category_fkey";
            columns: ["category"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          }
        ];
      };
      sales: {
        Row: {
          created_at: string;
          id: number;
          image: string;
          imageSm: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          image: string;
          imageSm: string;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          image?: string;
          imageSm?: string;
          name?: string;
        };
        Relationships: [];
      };
      sales_products: {
        Row: {
          created_at: string;
          id: number;
          product_id: number | null;
          sale_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          product_id?: number | null;
          sale_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          product_id?: number | null;
          sale_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "sales_products_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "deal_of_the_day";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "sales_products_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "sales_products_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "random_products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "sales_products_sale_id_fkey";
            columns: ["sale_id"];
            isOneToOne: false;
            referencedRelation: "sales";
            referencedColumns: ["id"];
          }
        ];
      };
      tutorials: {
        Row: {
          content: Json | null;
          created_at: string;
          description: string;
          id: number;
          imageUrl: string;
          title: string;
        };
        Insert: {
          content?: Json | null;
          created_at?: string;
          description: string;
          id?: number;
          imageUrl: string;
          title: string;
        };
        Update: {
          content?: Json | null;
          created_at?: string;
          description?: string;
          id?: number;
          imageUrl?: string;
          title?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      deal_of_the_day: {
        Row: {
          category: number | null;
          created_at: string | null;
          description: Json | null;
          id: number | null;
          images: string[] | null;
          manufacturer: string | null;
          name: string | null;
          price: number | null;
          quantity_sold: number | null;
          rating: number | null;
          sale_price: number | null;
          specification: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "products_category_fkey";
            columns: ["category"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          }
        ];
      };
      random_products: {
        Row: {
          category: number | null;
          created_at: string | null;
          description: Json | null;
          id: number | null;
          images: string[] | null;
          manufacturer: string | null;
          name: string | null;
          price: number | null;
          quantity_sold: number | null;
          rating: number | null;
          sale_price: number | null;
          specification: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "products_category_fkey";
            columns: ["category"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
