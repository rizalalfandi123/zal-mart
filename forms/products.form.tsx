import { FunctionComponent, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import ImageIcon from "@mui/icons-material/Image";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";

import { TextField, Button } from "components";
import { productSchema, ProductType } from "schemas";
import { colors, SxProps, Theme, useMediaQuery, useTheme } from "@mui/material";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const ProductsForm: FunctionComponent = () => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedThumbnail, setSelectedThumbnail] = useState<number>(0);
  const [showButtonSetThumbnail, setShowButtonSetThumbnail] = useState<number | null>(null);

  const { handleSubmit, control, formState } = useForm<ProductType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      desc: "",
    },
  });

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png", ".jpg", ".JPG", ".JPEG", ".PNG"],
    },
  });

  console.log({ acceptedFiles });

  return (
    <form onSubmit={handleSubmit((value) => console.log({ value }))}>
      <Grid container direction="column" spacing={3}>
        <Grid container xxs={12}>
          <Grid xxs={12} md={8}>
            <TextField<ProductType> control={control} name="name" fullWidth label="Enter Product Name" />
          </Grid>
          <Grid xxs={12} md={4}>
            <TextField<ProductType>
              control={control}
              name="price"
              fullWidth
              label="Enter Product Price"
              type="number"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              InputProps={{
                startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
        <Grid xxs={12}>
          <Box
            sx={{
              border: `1px solid ${colors.grey[400]}`,
              borderRadius: "1rem",
              padding: "1rem",
              minHeight: "16rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, justifyContent: "center", alignItems: "center" }}
            >
              <ImageIcon sx={{ fontSize: "6rem", color: colors.grey[400] }} />
              <Typography>Drag and drop some Image here, or click to select files</Typography>
            </Box>
          </Box>
        </Grid>
        {acceptedFiles && acceptedFiles.length > 0 && (
          <Grid xxs={12}>
            <Box
              sx={{ width: "100%", height: "8rem", display: "flex", gap: 2, overflowX: "auto", overflowY: "hidden" }}
            >
              {acceptedFiles.map((file, index) => {
                const selectedThumbnailStyle: SxProps<Theme> = ({ palette }) => ({
                  border: `2px solid ${palette.primary.main}`,
                });

                return (
                  <Box
                    key={index}
                    onMouseOver={() => setShowButtonSetThumbnail(index)}
                    onMouseLeave={() => setShowButtonSetThumbnail(null)}
                    sx={(theme) => ({
                      aspectRatio: "1/1",
                      borderRadius: "0.4rem",
                      border: `1px solid ${colors.grey[400]}`,
                      position: "relative",
                      ...(index === selectedThumbnail ? selectedThumbnailStyle(theme) : {}),
                    })}
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.6rem" }}
                    />
                    {showButtonSetThumbnail !== null &&
                      showButtonSetThumbnail !== selectedThumbnail &&
                      showButtonSetThumbnail === index && (
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ position: "absolute", top: "35%", left: "5%" }}
                          onClick={() => setSelectedThumbnail(index)}
                        >
                          Set Thumbnail
                        </Button>
                      )}
                  </Box>
                );
              })}
            </Box>
          </Grid>
        )}
        <Grid xxs={12}>
          <Controller
            name="desc"
            control={control}
            render={({ field }) => (
              <ReactQuill
                {...field}
                theme="snow"
                onChange={(text) => {
                  field.onChange(text);
                }}
                style={{ height: "10rem", border: "none" }}
              />
            )}
          />
        </Grid>
        <Grid xxs={12} display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" size="large" fullWidth={mobileView} sx={{ margin: "1rem 0" }}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
