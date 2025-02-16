
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, TextEditor, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {authService }from '../../appwrite/auth'

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues, formState:{errors} } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
            location : post?.location || "",
            eventType : post?.type || "all",
            date: post?.date || "",
            price: post?.price || "",
            url : post?.url || "",
            ticketUrl : post?.url || "",

        },
    });

    const navigate = useNavigate();

    const submit = async (data) => {
        const userData  = await authService.getUserData()
        // console.log(userData.$id, "its user id haii haha")
    
        if(userData)
            {
                alert("hey got the data")
            }
            else{
                alert("error while uploading")
            }
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
            // else if (dbPost && eventType=== "concert") {
            //     navigate(`/concert/${dbPost.$id}`);
            // }
            // else if (dbPost && eventType=== "comedy") {
            //     navigate(`/comedy/${dbPost.$id}`);
            // }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                // console.log(data.featuredImage, "Now i create db post for u lil bro");
                const dbPost = await appwriteService.createPost({ ...data, userId: (userData.$id) });

                if (dbPost) {
                    navigate(`/home`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                {errors.title && <span className=' text-red-600 px-20'>Fill the title</span> }
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <Input
                    label="Location :"
                    placeholder="Location"
                    className="mb-4"
                    {...register("location", { required: true })}
                />
                {errors.location && <span className=' text-red-600 px-20'>Fill the location</span> }
                <Input
                    label= "Date :"
                    min = "2024-2-12"
                    max = "2025-2-12"
                    placeholder = "Date"
                    className= "mb-4"
                   {...register("date",{required: true})}
                />
                {errors.date && <span className=' text-red-600 px-20'>Fill the date</span> }
                <TextEditor label="Content : " name= "content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Select
                    options={["all", "sports","party","comedy","concert"]}
                    label="Event Type"
                    className="mb-4"
                    {...register("eventType", { required: true })}
                />
                <Input
                    label="Price :"
                    placeholder=""
                    className="mb-4"
                    {...register("price",)}
                />
                <Input
                    label= "Url :"
                    placeholder = "location"
                    className= "mb-4"
                   {...register("url",{required: true})}
                />
                {errors.url && <span className=' text-red-600 px-20'>Enter the location url</span> }
                <Input
                    label= "Ticket Url :"
                    placeholder = "ticket url"
                    className= "mb-4"
                   {...register("ticketUrl",)}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}