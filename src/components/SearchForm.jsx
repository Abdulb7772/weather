import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const SearchSchema = yup.object().shape({
    city: yup.string().required("city name is required"),
});

export default function SearchForm({ onSearch }) {
    return (
        <Formik
            initialValues={{ city: "" }}
            validationSchema={SearchSchema}
            onSubmit={(values) => onSearch(values.city)}
            >
            {({ errors, touched}) => (
                <Form className="flex w-full max-w-xl mx-auto px-3 md:px-6 items-center text-2xl gap-2 relative pb-1">
                    <Field name="city">
                        {({ field }) => (
                            <Input
                            {...field}
                            placeholder="Enter City Name"
                             className="flex-1 text-2xl p-4 bg-blue-500/50 border-none text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none rounded-full px-4"
              />
                        )}
                    </Field>

                    <Button 
                        type="submit" 
                        size="icon"
                        className="bg-blue-500 hover:bg-blue-600  place-items-center rounded-full h-8 w-8"
                    >
                        <Search className="h-5 w-5" />
                    </Button>

                    {errors.city && touched.city && (
            <p className="text-red-400 text-sm absolute -bottom-6 left-4">{errors.city}</p>
          )}
                </Form>
            )}
            </Formik>
    );
}